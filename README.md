# React + Tailwind Dashboard with Cloudinary Upload

## 📌 Project Overview

This project is a **professional full-stack internship task** built using **React, Tailwind CSS, and Cloudinary**.
It demonstrates a **dynamic, editable landing page** where all content can be managed through an admin-style dashboard without page refresh.

The application focuses on **clean UI, dynamic state management, and real-world integration** practices.

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Glassmorphism UI design
* React Context API

### Backend

* Node.js
* Express.js
* Cloudinary (Image Upload)

### State & Persistence

* React Context API
* LocalStorage (client-side persistence)
* File-based backend storage (optional)

---

## 🧩 Core Components

1. **Header**

   * Dynamic title
   * Image uploaded via Cloudinary
   * Styled using Tailwind CSS

2. **Navbar**

   * Three navigation links
   * Editable labels and URLs via dashboard
   * Responsive horizontal layout

3. **Footer**

   * Editable email
   * Editable phone number
   * Editable address

4. **Dashboard**

   * Central admin panel to manage all content
   * Updates reflected instantly without page reload
   * Section-wise editing for Header, Navbar, and Footer

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   * Create a `.env` file (or rename `.env.example`)
   * Add your Cloudinary credentials:

     ```env
     PORT=5000
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```

   > ⚠️ Image upload will not work without Cloudinary credentials, but the rest of the app will function normally.

4. Start the backend server:

   ```bash
   npm start
   ```

   Server runs at: `http://localhost:5000`

---

### 🔹 Frontend Setup

1. Open a new terminal and navigate to the client directory:

   ```bash
   cd client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open the provided URL (usually `http://localhost:5173`) in your browser.

---

## 🚀 Usage Guide

* **Landing Page**: Displays the Header, Navbar, and Footer.
* **Edit Mode**:

  * Click the **Edit** button in the Navbar
  * OR navigate directly to `/dashboard`
* **Dashboard Capabilities**:

  * Update header title and image
  * Modify navbar links (text and URLs)
  * Edit footer contact details
  * Changes reflect instantly across the application

---

## ✨ Key Features

* **Dynamic Content Management** – No page refresh required
* **Cloudinary Integration** – Real image uploads with secure URLs
* **Persistent State** – Data retained after refresh using LocalStorage
* **Clean UI** – Modern dark theme with Tailwind CSS
* **Responsive Design** – Works on desktop, tablet, and mobile
* **Internship-Oriented Architecture** – Simple, readable, and scalable

---

## 📄 License

This project is licensed under the **MIT License**.





