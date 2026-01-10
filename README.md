# Rimeberry Website

A modern, multilingual website for Rimeberry group featuring products including fruits, vegetables, cheese, chocolates, and yogurt.

## Features

- 🌍 **Multilingual Support**: French, English, and Arabic
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Built with React, Tailwind CSS, and Framer Motion
- 🚀 **Fast Performance**: Optimized with Vite
- 📦 **GitHub Pages Ready**: Configured for automatic deployment

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **React Router** (HashRouter) - Client-side routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **i18next** - Internationalization
- **React i18next** - React integration for i18n

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd swaray-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Create a new repository on GitHub** (or use existing)

2. **Push your code:**
```bash
git add .
git commit -m "Initial commit - Rimeberry website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save the settings

4. **Important**: Update `vite.config.js` and `package.json` with your repository name:
   - In `vite.config.js`, change `/RimeberryFinal/` to match your repository name
   - In `package.json`, update the `homepage` field to match your GitHub Pages URL

### After Deployment

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

The GitHub Actions workflow will automatically deploy on every push to the `main` branch.

## Project Structure

```
swaray-website/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── data/            # Product data
│   ├── i18n/            # Translation files
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Configuration

### Base Path Configuration

The project uses HashRouter, which works with any base path. The base path is configured in `vite.config.js`:

- **Development**: `/` (default)
- **Production**: `/YOUR_REPO_NAME/` (for GitHub Pages)

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

## Troubleshooting

### White Screen on GitHub Pages

1. Check that the base path in `vite.config.js` matches your repository name
2. Verify that GitHub Pages is using "GitHub Actions" as the source
3. Check the GitHub Actions workflow logs for errors
4. Open browser console (F12) and check for 404 errors on assets

### Build Errors

1. Make sure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check Node.js version: Should be 18 or higher

### Image Loading Issues

All images use the `getImagePath()` utility function which automatically handles the base path for GitHub Pages deployment.

## License

Private project - All rights reserved

## Contact

For questions or issues, please contact the development team.
