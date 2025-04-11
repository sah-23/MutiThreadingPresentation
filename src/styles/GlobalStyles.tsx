import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #00b4d8;
    --secondary: #0077b6;
    --accent: #90e0ef;
    --background: #0c0926;
    --text: #ffffff;
    --muted: rgba(255, 255, 255, 0.7);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overscroll-behavior: none;
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
  }

  body {
    /* Support for zoom functionality */
    will-change: transform;
    transform-origin: center center;
    transition: transform 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.025em;
  }

  .custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 180, 216, 0.5);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: width 0.2s, height 0.2s;
    backdrop-filter: invert(100%);
    box-shadow: 0 0 15px rgba(0, 180, 216, 0.8);
  }

  .custom-cursor.active {
    width: 25px;
    height: 25px;
    background-color: rgba(0, 180, 216, 0.7);
  }

  .cursor-trail {
    position: fixed;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0, 180, 216, 0.3);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9998;
    mix-blend-mode: difference;
  }
`;

export default GlobalStyles; 