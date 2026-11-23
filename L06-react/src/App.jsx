// Import React useState hook for managing state
import { useState } from 'react'
// Import mock food dataset
import Foods from "./Foods"
// Import component styles
import './App.css'

// Main App component
function App() {
  // State to track the total number of items in cart
  const [item, setItemCount] = useState(0);

  // Increment cart count when item is added
  function addToCart() {
    console.log("updating cart");
    setItemCount(item + 1);
  }

  // Decrement cart count only if greater than 0
  function removeItem() {
    if(item > 0) {
      setItemCount(item - 1);
    }
  }

  // Render cart summary and food list
  return (
    <div>
      {/* Display current cart count */}
      <h2>Items in Cart: {item}</h2>

      {/* Map through each food item to display its card */}
      {Foods.map((Elem) => {
        return (
          <div 
            key={Elem.id} 
            style={{border: "1px solid black",padding: "5px",margin: "5px",width: "200px"}}>
            {/* Food item details */}
            <p>{Elem.name}</p>
            <p>{Elem.category}</p>
            <p>₹{Elem.price}</p>
            {/* Availability status */}
            <p>{Elem.available ? "available" : "out of stock "}</p>
            <p>{Elem.emoji}</p>

            {/* Food image */}
            <img src={Elem.image} alt="" width="150"/>

            <br />

            {/* Add to cart button (disabled if not available) */}
            <button disabled={!Elem.available} onClick={addToCart}>
              Add to Cart
            </button>
             <br />

            {/* Remove item button (disabled if not available) */}
            <button disabled={!Elem.available} onClick={removeItem}>
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default App
