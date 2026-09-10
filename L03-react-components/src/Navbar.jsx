import React from 'react'

function Navbar() {
  return (
    <div>
        <ul style={{display:'flex',gap:"50px",listStyle:"none",justifyContent:"center",border:"2px solid white",backgroundColor:'blue',justifyContent:"space-evenly"}}>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">courses</a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
