import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';

function App() {
  // State to store fetched products
  const [products, setProducts] = useState([]);

  // Fetch API data on component mount (empty dependency array [])
  useEffect(() => {
    async function getData() {
      console.log(".....loading");
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
    }

    getData();
  }, []);

  return (
    <div>
      {/* Pass products state down to ProductsList component */}
      <ProductsList products={products} />
    </div>
  );
}

export default App;
