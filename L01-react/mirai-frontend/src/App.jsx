// useState: React hook to manage dynamic state within functional components
import { useState } from 'react'

// Assets and CSS imported via Vite bundler
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// ==========================================
// REACT FUNCTIONAL COMPONENT
// ==========================================
// A React component is simply a JavaScript function that returns JSX (UI description).
function App() {
  // State declaration: [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0)

  // JSX returned by the component
  // Note: <>...</> is a React Fragment (allows grouping elements without adding extra DOM nodes)
  return (
    <>
      <h1>mirai</h1>
    </>
  )
}

// Exporting App as the default export so main.jsx can import it
export default App

