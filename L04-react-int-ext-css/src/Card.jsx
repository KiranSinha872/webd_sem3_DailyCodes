// External CSS
import './Card.css'

// Internal CSS: style object
const cardStyle = {
  backgroundColor: '#fdf2f8',
  padding: '16px',
  margin: '12px 0',
  borderRadius: '8px'
}

function Card() {
  return (
    // className="Card" -> External CSS (.Card from Card.css)
    // style={cardStyle} -> Internal CSS
    <div className="Card" style={cardStyle}>
      {/* Styled by Card.css (External CSS: pink) */}
      <h1>Card Component(pink)</h1>

      {/* Inline CSS */}
      <p style={{ color: '#9d174d' }}>
        This is a simple card component.
      </p>
    </div>
  )
}

export default Card
