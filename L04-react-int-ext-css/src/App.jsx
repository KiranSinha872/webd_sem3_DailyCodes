// External CSS
import './App.css'
import Block from './Block'
import Card from './Card'

// Internal CSS: defined as a JavaScript object with camelCase properties
const appStyle = {
  padding: '20px',
  fontFamily: 'sans-serif'
}

function App() {
  return (
    // Internal CSS applied using style attribute
    <div style={appStyle}>
      {/* External CSS applied via App.css (color: brown) */}
      <h1>App ipsum dolor sit amet.(brown)</h1>

      {/* Block Component */}
      <Block />

      {/* Card Component */}
      <Card />
    </div>
  )
}

export default App
