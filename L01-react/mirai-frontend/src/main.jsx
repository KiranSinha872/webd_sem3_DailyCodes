// =======================================================
// ENTRY POINT OF THE REACT APPLICATION (Vite Setup)
// =======================================================

// StrictMode: A developer-tool component that helps find common bugs
// (e.g., runs component effects twice in dev mode to detect side effects).
import { StrictMode } from 'react'

// createRoot: Modern React 18+ API for initializing the root container
// imported from 'react-dom/client' instead of 'react-dom'.
import { createRoot } from 'react-dom/client'

// Global styles applied across the entire app
import './index.css'

// Root React component that holds our UI structure
import App from './App.jsx'

// 1. Find the target <div> with id "root" in index.html
// 2. Initialize a React root using createRoot(...)
// 3. Render the <App /> component inside <StrictMode>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

