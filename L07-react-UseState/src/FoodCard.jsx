import React from 'react'

// FoodCard component: renders food items and handles Add to Cart (Lect-22)
function FoodCard(props) {
  let Foods = props.Foods;
  let addtocart = props.addtocart;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      {Foods.map((element) => {
        return (
          <div
            key={element.id}
            style={{
              backgroundColor: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '12px',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img
              src={element.image}
              alt={element.name}
              style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <p><strong>{element.name}</strong> {element.emoji}</p>
            <p>Category: {element.category}</p>
            <p>Price: ₹{element.price}</p>
            <p>{element.available ? 'Available 🕺' : 'Out of stock 😰'}</p>
            {/* Button disabled if item is unavailable */}
            <button
              disabled={!element.available}
              onClick={addtocart}
              style={{
                padding: '6px 12px',
                cursor: element.available ? 'pointer' : 'not-allowed',
                backgroundColor: element.available ? '#0ea5e9' : '#94a3b8',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodCard
