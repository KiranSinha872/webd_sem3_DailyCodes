import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList.jsx';

function App() {

//  const [count,setCount]=useState(5);
 const [products,setProducts]=useState([]);
//  const [x,setX]=useState(12);

  //  useEffect(()=>{
  //     console.log("anushka");
  //   })
     
  //   useEffect(()=>{
  //     console.log("sapna");
  //   },[count,x])

    useEffect(()=>{
      // console.log("punima");
      async function getData(){
        console.log(".....loading");
        let responce=await fetch("http://localhost:3000/api/products");
           let data=  await responce.json();
          //  console.log(data);
           setProducts(data);
           console.log(products);
      }


     getData();
    },[])

  return (
    <div>

     {/* <h1>adipisicing elit. Soluta, ipsam!</h1>
      <h1>my number is {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>count me</button>
    <button onClick={()=>{setX(x+1)}}> increase x</button> */}

    <ProductsList products={products}/>

    </div>
  )
}

export default App