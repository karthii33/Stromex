# Stromex Web Application

A modern, high-performance web application built with React and Vite, featuring a responsive design and smooth user experience.

## Features

- **React 19 & Vite**: Ultra-fast development server and optimized production builds.
- **Modern Routing**: Seamless navigation powered by React Router.
- **Dynamic Dashboard**: Interactive charts and data visualizations using Recharts.
- **Drag & Drop**: Intuitive drag-and-drop interactions enabled by `@hello-pangea/dnd`.
- **Secure Areas**: Protected routes for authenticated user experiences.
- **Sleek UI**: Beautifully styled components and layouts.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository
2. Install dependencies for frontend and backend:
   ```bash
   cd frontend
   npm install
   ```
   ```bash
   cd backend
   npm install
   ```

### Running Locally

To start the frontend development server:
```bash
cd frontend
npm run dev
```

To start the backend server:
```bash
cd backend
npm run start
```

## Deployment

The frontend of this project is configured for Vercel.

1. Run `npx vercel login` to authenticate.
2. Run `npx vercel --prod` to deploy to production.
