# Polyneo Advanced Materials - Web Application

This project is a modern React web application for Polyneo Advanced Materials, built with Vite, Tailwind CSS, and Framer Motion. It features a premium design with 3D card effects, cinematic animations including a custom Ken Burns hero section, and a responsive layout.

## 🚀 Deployment Guide (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Prerequisites
- A GitHub account.
- A Vercel account.

### Steps to Deploy

1.  **Push the code to GitHub**:
    Ensure your project is pushed to a GitHub repository.

2.  **Import Project in Vercel**:
    - Go to your Vercel Dashboard.
    - Click **"Add New Project"**.
    - Select "Import" next to your GitHub repository.

3.  **Configure Build Settings**:
    Vercel should automatically detect the settings for a **Vite** project. Verify the following:
    - **Framework Preset**: `Vite`
    - **Root Directory**: `./` (or blank)
    - **Build Command**: `vite build` (or `npm run build`)
    - **Output Directory**: `dist`
    - **Install Command**: `npm install` (or `yarn install` / `pnpm install` / `bun install`)

4.  **Deploy**:
    Click **"Deploy"**. Vercel will install dependencies, build the project, and host it.

### Environment Variables
If you use any environment variables (e.g., for email services), add them in the "Environment Variables" section of the Vercel project settings.

## 🛠 Project Setup

To run this project locally:

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    bun install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    # or
    bun run dev
    ```
    Open `http://localhost:8080` (or the port shown in terminal).

3.  **Build for Production**:
    ```bash
    npm run build
    # or
    bun run build
    ```
    The output will be in the `dist` folder.

## 📂 Project Structure

- `src/components`: UI components (Hero, Navigation, Footer, reusable UI elements).
- `src/pages`: Individual page components (FlameRetardant, etc.).
- `src/assets`: Images and static media (optimized, unused assets removed).
- `src/lib`: Utility functions (Tailwind merge, etc.).

## ✨ Key Features

- **Cinematic Hero Section**: Features a custom Framer Motion "Ken Burns" pan/zoom effect on the Indian Flag Polymer background.
- **Dynamic Text Scenes**: Smooth text transitions cycling through key value propositions.
- **Comet Cards**: 3D tilt and spotlight effects on product cards.
- **Glassmorphism**: Modern UI transparency effects on header and overlays.
