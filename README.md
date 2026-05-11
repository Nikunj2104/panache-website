# Panache Engineering & SURABHI Dairy MIS

A modern, responsive business website for Panache Engineering, featuring their flagship product **SURABHI Dairy MIS**. Built with React, Vite, and Vanilla CSS.

## Features

- **Modern Design**: Clean, aesthetic, and responsive UI built for business users.
- **Light & Dark Mode**: Integrated theme toggling utilizing CSS variables and `localStorage` to persist user preference.
- **Dynamic Animations**: Smooth scroll effects, glassmorphism UI elements, and interactive hover states.
- **SURABHI MIS Showcase**: A detailed, interactive tabbed section explaining the product's overview, hardware integrations (Weighbridge, RFID, HMIs, PLCs), and comprehensive reports.
- **Optimized Build**: Powered by Vite for lightning-fast HMR and optimized production builds.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (with CSS variables for theming)
- **Icons**: Lucide React

## Getting Started

Follow these steps to run the application locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Navigate to the project directory:
   ```bash
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Building for Production

To create an optimized production build, run:
```bash
npm run build
```

This will generate a `dist` directory with your minified and bundled application, ready to be deployed to any static hosting provider.
