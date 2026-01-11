# Enchanted Journal Club

A React + Vite web application for displaying upcoming events for the Enchanted Journal Club.

**!! DO NOT EDIT ANY FILES IN `public/` DIRECTORY !!**
**All code changes will be done within the `src/` directory**

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Verify Installation](#step-3-verify-installation)
- [Running the Project Locally](#running-the-project-locally)
  - [Development Server](#development-server)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
  - [Step 1: Build the Project](#step-1-build-the-project)
  - [Step 4: Deploy to GitHub Pages](#step-4-deploy-to-github-pages)
  - [Step 5: Verify Deployment](#step-5-verify-deployment)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [React Beginner Tips](#react-beginner-tips)
- [Additional Resources](#additional-resources)
- [Support](#support)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher recommended)
  - Download from [nodejs.org](https://nodejs.org/)
    ```
        # Download and install nvm:
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

        # in lieu of restarting the shell
        \. "$HOME/.nvm/nvm.sh"

        # Download and install Node.js:
        nvm install 24

        # Verify the Node.js version:
        node -v # Should print something like "v24.12.0".

        # Verify npm version:
        npm -v # Should print something like "11.6.2".
    ```
  - Verify installation by running: `node --version`
- **npm** (comes with Node.js)
  - Verify installation by running: `npm --version`
- **Git** (for cloning and deploying)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation by running: `git --version`

## Installation

### Step 1: Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone git@github.com:JimmyJimmbles/enchanted_journal.git
cd enchanted_journal
```

### Step 2: Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This command will:
- Read the `package.json` file
- Download and install all dependencies listed in `dependencies` and `devDependencies`
- Create a `node_modules` folder with all the packages
- Generate or update `package-lock.json` to lock dependency versions

**Dependencies installed:**
- React and React DOM
- Vite (build tool)
- Font Awesome (icons)
- Axios (HTTP client)
- Day.js (date manipulation)
- ical.js (calendar parsing)
- gh-pages (deployment tool)

### Step 3: Verify Installation

After installation completes, verify everything is set up correctly:
(This will show all installed packages. You should see no errors.)

```bash
npm list --depth=0
```

## Running the Project Locally

### Development Server

To start the development server:

```bash
npm run dev
```

This will:
- Start the Vite development server
- Usually run on `http://localhost:5173` (check the terminal output for the exact URL)
- Automatically reload the browser when you make changes to the code
- Show helpful error messages in the browser console

**Note:** The development server will keep running until you stop it. Press `Ctrl + C` in the terminal to stop the server.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package. The site uses a custom domain (`enchantedjournal.club`) configured via the `CNAME` file.

### Step 1: Build the Project

Create a production build:

```bash
npm run build
```

This will:
- Optimize and bundle all assets
- Create a `dist` folder with the production-ready files
- Minify JavaScript and CSS
- Generate hashed filenames for cache busting

### Step 4: Deploy to GitHub Pages

Deploy the built files to GitHub Pages:

```bash
npm run deploy
```

This command will:
- Use the `gh-pages` package to deploy the `dist` folder
- Create or update the `gh-pages` branch in your repository
- Push the built files to GitHub
- Make your site available at your GitHub Pages URL

**Important Notes:**
- The first deployment may take a few minutes to become available
- Subsequent deployments will update the site automatically

### Step 5: Verify Deployment

1. Wait a few minutes for GitHub Pages to process the deployment
2. Visit your site URL:
   - Custom domain: `https://enchantedjournal.club`
3. Check that all assets load correctly and the site functions as expected

## Project Structure

```
enchanted_journal/
├── public/              # Static assets (copied to dist during build) IGNORE THESE
│   ├── CNAME           # Custom domain configuration IGNORE THESE
│   └── bow.png         # Public images IGNORE THESE
├── src/
│   ├── assets/         # Image assets
│   ├── components/     # React components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── dist/               # Production build output (auto generated DO NOT EDIT)
├── index.html          # HTML template (DO NOT EDIT)
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## React Beginner Tips

If you're new to React, this section will help you understand the codebase and get started with making changes.

### Understanding the Codebase

1. **Start with the Component Guide**
   - Read `COMPONENT_GUIDE.md` first! It explains how all the components work together
   - Start with the smallest components (`Button.jsx`, `SocialLink.jsx`) and work your way up

2. **Read the Comments**
   - Every file has extensive comments explaining what each part does
   - Don't skip the comments - they're there to help you learn!

3. **Follow the Data Flow**
   - Data starts in `App.jsx` (fetched from Google Calendar)
   - It flows down through components via props
   - Start at `App.jsx` and trace how data moves through the app

### Key React Concepts You'll See

#### 1. Components
Components are like LEGO blocks - small, reusable pieces that build bigger things.

```jsx
// A simple component
function Button({ text, href }) {
  return <a href={href}>{text}</a>;
}
```

#### 2. Props (Properties)
Props are how you pass data from a parent component to a child component.

```jsx
// Parent component passes data via props
<Button text="Click Me" href="https://example.com" />

// Child component receives props
function Button({ text, href }) {
  // text = "Click Me"
  // href = "https://example.com"
}
```

#### 3. State (`useState`)
State lets components remember and update data.

```jsx
// Create state
const [events, setEvents] = useState([]);

// events = current value (starts as empty array)
// setEvents = function to update events

// Update state
setEvents([event1, event2, event3]);
```

#### 4. Effects (`useEffect`)
Effects let you do things when a component loads or when data changes.

```jsx
useEffect(() => {
  // This code runs when the component first loads
  fetchEvents();
}, []); // Empty array = only run once
```

#### 5. JSX
JSX looks like HTML but it's actually JavaScript.

```jsx
// This is JSX
<div className="my-class">
  <h1>Hello World</h1>
</div>
```

**Important JSX Rules:**
- Use `className` instead of `class` (because `class` is a reserved word in JavaScript)
- Use `{}` to insert JavaScript expressions: `<h1>{event.title}</h1>`
- Always close tags: `<div></div>` or `<div />` for self-closing tags

### Common Patterns in This Project

#### Conditional Rendering
Show something only if a condition is true:

```jsx
{event.description && <p>{event.description}</p>}
// Only shows paragraph if event.description exists
```

#### Mapping Over Arrays
Loop through an array and create components:

```jsx
{events.map((event, index) => (
  <EventCard key={index} event={event} />
))}
```

#### Reusable Components
Use the same component multiple times with different props:

```jsx
<Button text="Location" href={locationUrl} />
<Button text="Calendar" href={calendarUrl} />
```

### Making Your First Changes

1. **Change Text**
   - Find text in any component file
   - Change it and save
   - The browser will automatically reload!

2. **Modify Props**
   - Try changing props passed to components
   - See how it affects what's displayed

3. **Add a New Button**
   - Copy an existing `Button` component usage
   - Change the `text` and `href` props
   - See it appear on the page!

4. **Experiment with Styling**
   - Find CSS classes in component files
   - Modify styles in `src/index.css` or `src/App.css`
   - See changes instantly in the browser

### File Organization Tips

- **Components** go in `src/components/`
- **Utilities** (helper functions) go in `src/utils/`
- **Constants** (API keys, config) go in `src/constants.js`
- **Styles** go in `src/index.css` (global) or `src/App.css` (app-specific)

### Debugging Tips

1. **Check the Browser Console**
   - Open Developer Tools (F12 or right-click → Inspect)
   - Look for red error messages
   - Read them carefully - they usually tell you what's wrong!

2. **Check the Terminal**
   - When running `npm run dev`, errors appear in the terminal
   - Read the error message - it often tells you which file and line has the problem

3. **Common Mistakes**
   - Forgetting to import a component: `import Button from './Button';`
   - Typo in prop name: `text` vs `txt`
   - Missing closing tag: `<div>` needs `</div>`
   - Using `class` instead of `className` in JSX

### Learning Path

1. **Week 1: Understanding**
   - Read through all component files
   - Understand how props work
   - See how components connect

2. **Week 2: Small Changes**
   - Change text and colors
   - Add new buttons
   - Modify existing components

3. **Week 3: Creating**
   - Create a new simple component
   - Use it in an existing component
   - Pass props to it

4. **Week 4: Building**
   - Combine multiple components
   - Add new features
   - Experiment with state

### Getting Help

- **Read the comments** - They explain almost everything
- **Check COMPONENT_GUIDE.md** - Detailed component explanations
- **React Documentation** - [react.dev](https://react.dev/) is excellent
- **Google it** - "React how to [your question]" usually finds good answers

### Remember

- **Every expert was once a beginner** - Don't be discouraged!
- **Break things** - That's how you learn! You can always undo changes with Git
- **One step at a time** - Don't try to understand everything at once
- **Practice** - The more you code, the easier it gets

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages Package](https://github.com/tschaub/gh-pages)

## Support

If you encounter any issues during installation, development, or deployment, please check:
1. Node.js and npm versions are up to date
2. All dependencies are installed correctly
3. Git is properly configured
4. GitHub repository permissions are set correctly
