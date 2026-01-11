/**
 * MAIN ENTRY POINT
 * 
 * This is the FIRST file that runs when someone visits your website.
 * Think of it as the "starting point" of your React application.
 * 
 * This file:
 * 1. Finds the HTML element with id="root" (from index.html)
 * 2. Renders the App component into that element
 * 3. Makes your React app appear on the page
 */

// Import React - we need this for StrictMode
import { StrictMode } from 'react';

// Import createRoot - this is React's way of rendering components to the page
import { createRoot } from 'react-dom/client';

// Import Font Awesome CSS - this gives us access to all the icons (Instagram, Meetup, etc.)
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import global CSS styles
import './index.css';

// Import our main App component - this is the "brain" of our application
import App from './App.jsx';

/**
 * RENDER THE APP
 * 
 * This code finds the HTML element with id="root" and renders our App component into it.
 * 
 * document.getElementById('root') - Finds the <div id="root"> element in index.html
 * createRoot() - Creates a React "root" (a place where React can render components)
 * .render() - Actually renders the App component into the page
 * 
 * StrictMode is a React tool that helps find problems in development.
 * It doesn't affect the production build, but it helps catch bugs early.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
