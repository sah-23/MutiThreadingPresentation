import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&family=Oxanium:wght@400;600;800&display=swap');

  :root {
    --primary: #4a90e2;
    --primary-light: #6ba8ff;
    --primary-dark: #2a6fc9;
    --secondary: #50c878;
    --tertiary: #ff0f8;
    --dark: #080821;
    --darker: #050516;
    --light: #2a2a50;
    --success: #0cff9a;
    --warning: #ffcc00;
    --danger: #ff3358;
    --text-primary: #2c3e50;
    --text-secondary: #34495e;
    --background: #0f0c29;
    --card-bg: rgba(10, 25, 47, 0.7);
    --card-border: rgba(66, 133, 244, 0.3);
    --grid-color: rgba(46, 80, 156, 0.7);
    --grid-highlight: rgba(0, 219, 255, 0.7);
    --gradient-1: linear-gradient(135deg, #0ff8, #0091ff);
    --gradient-2: linear-gradient(135deg, #f0f8, #ff3358);
    --gradient-3: linear-gradient(90deg, #ff3358, #ffcc00);
    --font-mono: 'VT323', monospace;
    --font-display: 'Oxanium', sans-serif;
    --transition: all 0.3s ease;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --glow: 0 0 8px var(--primary);
    --cursor-size: 18px;
    --cursor-color: #64b3f4;
    --cursor-center-size: 4px;
    --trail-size: 6px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* cursor: none !important; */
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: radial-gradient(circle at center, #1a2980 0%, #0f0c29 100%);
    color: var(--text-primary);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(circle at center, #1a2980 0%, #0f0c29 100%);
  }

  /* Custom cursor styling */
  .custom-cursor {
    position: fixed;
    width: var(--cursor-size);
    height: var(--cursor-size);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: screen;
    opacity: 1;
    
    /* Create a crosshair appearance */
    background: transparent;
    
    /* Add crosshair lines */
    &::before, &::after {
      content: '';
      position: absolute;
      background-color: var(--cursor-color);
    }
    
    /* Horizontal line */
    &::before {
      width: 100%;
      height: 1px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    
    /* Vertical line */
    &::after {
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    /* Add outer edges */
    &::before {
      box-shadow: 0 0 4px rgba(100, 179, 244, 0.8);
    }
    
    &::after {
      box-shadow: 0 0 4px rgba(100, 179, 244, 0.8);
    }
  }

  .custom-cursor.active {
    transform: translate(-50%, -50%) scale(0.8);
    
    &::before, &::after {
      background-color: #a0c4ff;
      box-shadow: 0 0 8px rgba(160, 196, 255, 0.9);
    }
  }

  /* Cursor trail effect */
  .cursor-trail {
    position: fixed;
    width: var(--trail-size);
    height: var(--trail-size);
    background: radial-gradient(circle, var(--cursor-color) 0%, rgba(100, 179, 244, 0) 70%);
    border-radius: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9998;
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
    filter: blur(1px);
  }

  /* Cursor styles for interactive elements */
  a, button, [role="button"], input, select, textarea, [onclick], .clickable, [type="button"], [type="submit"], 
  [type="reset"], label[for], summary, details, div[tabindex], area, map, iframe, object, embed, [contenteditable="true"],
  .react-three-fiber canvas, audio[controls], video[controls], [draggable="true"] {
    &:hover ~ .custom-cursor {
      transform: translate(-50%, -50%) scale(1.2);
      
      &::before, &::after {
        background-color: #64E8DE;
        box-shadow: 0 0 8px rgba(100, 232, 222, 0.9);
      }
    }
  }

  /* Navigation Controls */
  .nav-controls {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
  }

  .nav-button {
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  /* Progress Bar */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 0.3s ease;
  }

  /* Slide Container */
  .slide-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
  }

  /* Card Styles */
  .card {
    background: var(--card-bg);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--card-border);
    margin-bottom: 2rem;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 2rem;
    color: var(--primary);
  }

  h3 {
    font-size: 2rem;
    color: var(--secondary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  /* Code Blocks */
  pre {
    background: #f8f9fa;
    border-radius: 5px;
    padding: 1rem;
    overflow-x: auto;
    border: 1px solid var(--card-border);
    margin: 1rem 0;
  }

  code {
    font-family: 'Fira Code', monospace;
    color: var(--primary-dark);
  }

  /* Lists */
  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  /* Edge Navigation */
  .edge-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100px;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      opacity: 1;
    }
    
    &.left {
      left: 0;
      background: linear-gradient(90deg, rgba(74, 144, 226, 0.2), transparent);
    }
    
    &.right {
      right: 0;
      background: linear-gradient(-90deg, rgba(74, 144, 226, 0.2), transparent);
    }
  }

  .nav-arrow {
    font-size: 2rem;
    color: var(--primary);
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }

  /* Selection color */
  ::selection {
    background: var(--secondary);
    color: var(--dark);
  }
`;

export default GlobalStyles; 