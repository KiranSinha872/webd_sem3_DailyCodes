import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

function App() {
  return (
    <>
      <Navbar />

      <div style={{
        display: 'flex',
        width: '100%',
        gap: '30px'
      }}>
        <Content />
        <Content />
      </div>
    </>
  )
}

export default App