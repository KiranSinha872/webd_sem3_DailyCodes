// import React from 'react';
// import Card from './components/Card';
// import Users from './components/Users.jsx';
// const a = 90;

// const userdata=Users.filter((element)=>{
//   if(element.experience<=2)
//     return true;
//   else
//     return false;
// })

// console.log(Users);

// function MyButton() {
//   return (
//     <h1>this is button</h1>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <h1>this is app functional component</h1>
//       {/* <MyButton/> */}

//       {
//         userdata.map((Element)=>{
//           return (
//             <div key={Element.id}  style={{backgroundColor:'green'}}>
//               <h1>{Element.id}</h1>
//               <h1>{Element.name}</h1>
//               <h1>{Element.role}</h1>
//               <h1>{Element.location}</h1>
//               <h1>{Element.experience}</h1>
//               <img src={Element.image} alt="photo image"  style={{height:'100px'}}/>
//             </div>
//           )
//         })
//       }


//       <Card/>
//     </div>
//   );
// }


// // export default {App, MyButton};
// export default App;





// import React from 'react'
// import AdminPanel from './components/AdminPanel';
// import LoginForm from './components/LoginForm';

// function App() {
//   let content;
//   const isLoggedIn=false;
//   if (isLoggedIn) {
//     content = <AdminPanel/>;
//   } else {
//     content = <LoginForm/>;
//   }
//   return (
//     <div>
//       {content}
//       <h1>Lorem ipsum dolor sit amet.</h1>
//     </div>
//   );
// }
//   export default App;



import React from 'react'
import Card from './components/Card';
import Counter from './components/Counter';
// console.log(Card);


// const saif="chicken";
function App() {

// const myage=23;


  return (
    <div>
      {/* <h1>my age is {age}</h1> */}
        {/* <Card  myage={age}/> */}
        {/* <Card  mymarks={23}/> */}
            {/* <Section mycollege={college} myage={myage} a={27} />
            <Section mycollege={college} myage={myage} />
            <Section mycollege={college} myage={myage} />
            <Section mycollege={college} myage={myage} /> */}

     <Counter/>

    </div>
  )
}

export default App