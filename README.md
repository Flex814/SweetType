# Sweet Type

![Project Logo/Name](link-to-logo-or-image-if-any)  
_A nostalgic e-commerce website inspired by the 90s JDM car culture._

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

Sweet Type is a full-stack web application designed to bring the look and feel of a 90s JDM tuner shop into the digital world. The site includes product listings, a shopping cart, user authentication, and a custom admin dashboard for managing inventory.

## Features

- **Retro 90s Theme:** Authentic design elements reflecting 90s JDM car culture.
- **Product Catalog:** Browse and search through a selection of JDM parts and accessories.
- **User Authentication:** Secure user registration and login.
- **Shopping Cart:** Add items to your cart and proceed to checkout.
- **Admin Dashboard:** Manage products, orders, and users through a custom admin interface.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.

## Tech Stack

### Frontend
- **React.js** with **Tailwind CSS**: For building the interactive user interface and styling.
- **React Router**: For handling routing between different pages.
- **Axios**: For making HTTP requests to the backend API.

### Backend
- **Node.js** with **Express.js**: For handling server-side logic and API requests.
- **MongoDB** with **Mongoose**: For database management and data modeling.
- **JWT**: For user authentication.
- **dotenv**: For managing environment variables.

### DevOps
- **Docker**: For containerization of the frontend and backend services.
- **Docker Compose**: For orchestrating multi-container Docker applications.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- [WSL2](https://docs.microsoft.com/en-us/windows/wsl/) (if on Windows)

### Step-by-Step Setup

1. **Clone the repository:**
```
git clone https://github.com/Flex814/jdm-tuner-shop.git
cd jdm-tuner-shop
```
2. **Frontend Setup:**
```
cd frontend
npm install
```
3. **Backend Setup:**
```
cd ../backend
npm install
```
4. **Environment Variables:**

Create a .env file in the backend directory based on .env.example.
Add your environment variables (e.g., MongoDB connection string, JWT secret).

5. **Run the application with Docker Compose:**
```
docker-compose up --build
```
6. **Access the application:**

Frontend: http://localhost:3000
Backend API: http://localhost:5000
Usage
Frontend
Browse the catalog of JDM parts and accessories.
Register and log in to create an account.
Add items to your shopping cart and proceed to checkout.
Backend
Use the admin dashboard to manage products, orders, and users.

7. **API Endpoints**
GET /api/products: Retrieve all products.
POST /api/auth/login: Authenticate a user.
POST /api/orders: Create a new order.

8. **Project Structure**
```
jdm-tuner-shop/
│
├── frontend/          # React.js frontend
│   ├── public/        # Public assets
│   ├── src/           # Source files
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── Dockerfile     # Frontend Dockerfile
│
├── backend/           # Node.js backend
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── controllers/   # Route controllers
│   ├── app.js         # Main app file
│   ├── Dockerfile     # Backend Dockerfile
│   ├── .env           # Environment variables
│   └── ...
│
├── docker-compose.yml # Docker Compose configuration
├── README.md          # Project documentation
└── ...
```
**Contributing**
Contributions are welcome! If you'd like to contribute, please follow these steps:

**Fork the repository.**
Create a new branch (git checkout -b feature-branch-name).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch-name).
Open a Pull Request.
Please ensure your code follows the project's coding guidelines and is well-documented.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgements**
Inspiration: This project is inspired by the rich history of JDM car culture and the love for 90s aesthetics.
Tools: Special thanks to the developers of React, Node.js, Docker, and other tools used in this project.