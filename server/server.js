require('dotenv').config(); // <-- add this at the top

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// OPTIONAL BACKEND
// This server provides simple persistence via a JSON file and an optional upload endpoint.
// In a production app, you would use a real database (MongoDB/PostgreSQL).
// dotenv.config(); // Removed duplicate call

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Config (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Data Persistence File
const DATA_FILE = path.join(__dirname, 'data.json');

// Helper to read data
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    // Default initial data
    const initialData = {
      header: {
        title: "Welcome to My Brand",
        imgUrl: "https://via.placeholder.com/150",
      },
      navbar: {
        links: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
          { label: "Contact", url: "/contact" },
        ],
      },
      footer: {
        email: "contact@example.com",
        phone: "+1 234 567 890",
        address: "123 Tech Street, Silicon Valley",
      },
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

// Helper to write data
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Routes

// GET /api/components - Retrieve current component data
app.get('/api/components', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// POST /api/components - Update component data
app.post('/api/components', (req, res) => {
  try {
    const newData = req.body;
    // Basic validation could go here
    writeData(newData);
    res.json({ message: 'Data saved successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// POST /api/upload - Optional: Upload image to Cloudinary via Backend
// Note: The frontend currently handles uploads directly for simplicity.
// This endpoint is provided for reference or if you prefer server-side handling.
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Upload to Cloudinary using stream
  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'dashboard_uploads' },
    (error, result) => {
      if (error) {
        console.error('Cloudinary Upload Error:', error);
        return res.status(500).json({ error: 'Image upload failed' });
      }
      res.json({ url: result.secure_url });
    }
  );

  // Buffer to stream
  const { Readable } = require('stream');
  if (req.file.buffer) {
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);
    bufferStream.pipe(uploadStream);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
