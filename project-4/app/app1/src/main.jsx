import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #323343;
    color: white;
    height: 100vh;
    font-family: 'Intern', sans-serif;
    overflow-x: hidden;
  }

  // Ensure full height of the body is respected
  html, body {
    height: 100%;
  }

  // Responsive typography
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Intern', sans-serif;
  }

  // Mobile devices and small screens
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  // Large mobile devices and tablets
  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }

  // Tablets and smaller screens
  @media (max-width: 1024px) {
    body {
      font-size: 16px;
    }
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
