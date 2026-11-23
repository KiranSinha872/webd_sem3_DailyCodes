import { useState } from 'react';

export default function Counter() {
//    let count=0;

//state banani paregi count naam ki
const [count,setCount]=useState(0);

  function handleClick() {
    // setCount(count + 1);
    console.log("prince");
    console.log("subh");
    // count++;
    setCount(count+1);
    console.log(count);
  }
  return (
   <>
   <h1>my counter= {count}</h1>
   <h1>my counter= {count}</h1>
   <h1>my counter= {count}</h1>
   <h1>my counter= {count}</h1>
   <h1>my counter= {count}</h1>
   <h1>my counter= {count}</h1>

    <button onClick={handleClick}>
     click me {count}
    </button>
   </>
  );
}
