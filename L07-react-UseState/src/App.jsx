import React, { useState } from 'react'
import Foods from './Foods.jsx'
import FoodCard from './FoodCard.jsx'

function App() {

  // Topic 1: useState for storing input text
  const [text, setText] = useState('Welcome to Mirai');

  // Topic 2: useState for like and dislike toggle
  const [liked, setLiked] = useState(true);

  // Topic 3: useState for changing emojis
  const [hii, setHii] = useState(true);

  // Topic 4: useState for name, age, and input reset flag
  const [name, setName] = useState('sinha');
  const [start, setStart] = useState(true);
  const [age, setAge] = useState(0);

  // Topic 5: useState with updater function (+1 vs +3 batching) [Lect-24]
  const [counter, setCounter] = useState(42);

  // Topic 6: useState with object and spread operator [Lect-24]
  const [form, setForm] = useState({
    firstName: 'Subhash',
    lastName: 'Yadav',
    email: 'subh@msit.org'
  });

  // Topic 7: useState for shopping cart count [Lect-22]
  const [cartCount, setCartCount] = useState(0);


  // Topic 1: Controlled input handler
  function handlechange(e) {
    setText(e.target.value);
  }

  // Topic 2: Toggle like/dislike
  function likeDislike() {
    setLiked(!liked);
  }

  // Topic 3: Toggle emojis
  function hiifunction() {
    setHii(!hii);
  }

  // Topic 4: Clear default name on first key press
  const handleDown = (e) => {
    if (start === true) {
      setName('');
      setStart(false);
    }
  };

  // Topic 5: Updater function ensures state uses latest value
  function increment() {
    setCounter((prev) => prev + 1);
  }

  // Topic 7: Increment cart item count
  function addtocart() {
    setCartCount(cartCount + 1);
  }


  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>React useState Master Guide</h1>

      {/* Topic 1: Input and displaying text */}
      <section style={{ textAlign: 'center', margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h3>Topic 1: Controlled Input</h3>
        <input
          type="text"
          value={text}
          onChange={handlechange}
          style={{ padding: '8px 12px', border: '1px solid gray', borderRadius: '5px' }}
        />
        <p style={{ fontSize: '18px' }}>{text}</p>
      </section>

      {/* Topic 2: Like / Dislike toggle button */}
      <section style={{ textAlign: 'center', margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h3>Topic 2: Like / Dislike Toggle</h3>
        <button
          onClick={likeDislike}
          style={{ padding: '10px 18px', fontSize: '20px', cursor: 'pointer', borderRadius: '6px' }}
        >
          {liked ? '👍 Like' : '👎 Dislike'}
        </button>
      </section>

      {/* Topic 3: Emoji toggle button */}
      <section style={{ textAlign: 'center', margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h3>Topic 3: Emoji Toggle</h3>
        <button
          onClick={hiifunction}
          style={{ padding: '10px 18px', fontSize: '24px', cursor: 'pointer', borderRadius: '6px' }}
        >
          {hii ? '👅' : '💋'}
        </button>
      </section>

      {/* Topic 4: Name and age state */}
      <section style={{ margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px', textAlign: 'center' }}>
        <h3>Topic 4: Name and Age</h3>
        <input
          value={name}
          onKeyDown={handleDown}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={{ padding: '8px 12px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={() => setAge(age + 1)}
          style={{ padding: '8px 14px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Increment Age
        </button>
        <p>HELLO I M {name}, I m {age} years old</p>
      </section>

      {/* Topic 5: Updater function (+1 vs +3) [Lect-24] */}
      <section style={{ margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px', textAlign: 'center' }}>
        <h3>Topic 5: Counter with Updater Function</h3>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Your age: {counter}</p>
        <button
          onClick={() => {
            increment();
            increment();
            increment();
          }}
          style={{ padding: '8px 14px', marginRight: '10px', cursor: 'pointer' }}
        >
          +3 (updater function)
        </button>
        <button
          onClick={increment}
          style={{ padding: '8px 14px', cursor: 'pointer' }}
        >
          +1
        </button>
      </section>

      {/* Topic 6: Object state with spread operator [Lect-24] */}
      <section style={{ margin: '20px 0', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>Topic 6: Form Object State</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '320px', margin: '0 auto' }}>
          <label>
            First name:
            <input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              style={{ width: '100%', padding: '6px' }}
            />
          </label>
          <label>
            Last name:
            <input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              style={{ width: '100%', padding: '6px' }}
            />
          </label>
          <label>
            Email:
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{ width: '100%', padding: '6px' }}
            />
          </label>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            {form.firstName} {form.lastName} ({form.email})
          </p>
        </div>
      </section>

      {/* Topic 7: Food card application & cart counter [Lect-22] */}
      <section style={{ margin: '20px 0' }}>
        <h3 style={{ textAlign: 'center' }}>Topic 7: Food Order & Cart Application</h3>
        <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>🛒 Cart Count: {cartCount}</p>
        <FoodCard Foods={Foods} addtocart={addtocart} />
      </section>
    </div>
  );
}

export default App;
