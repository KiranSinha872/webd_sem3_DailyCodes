// External CSS
import './Block.css'

// Internal CSS: JavaScript style objects
const blockStyle = {
  backgroundColor: '#f0f4f8',
  padding: '16px',
  margin: '12px 0',
  borderRadius: '8px'
}

const btnStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}

function Block() {
  return (
    // className="Block" -> External CSS (.Block from Block.css)
    // style={blockStyle} -> Internal CSS
    <div className="Block" style={blockStyle}>
      {/* Styled by Block.css (External CSS: blue) */}
      <h1>Block Ipsum(blue)</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {/* Inline CSS: directly inside JSX using double curly braces */}
      <h2 style={{ color: '#1e3a8a' }}>About</h2>

      <p>This is a simple React block component.</p>

      {/* Styled using Internal CSS (btnStyle) */}
      <button style={btnStyle}>Read More</button>
    </div>
  )
}

export default Block
