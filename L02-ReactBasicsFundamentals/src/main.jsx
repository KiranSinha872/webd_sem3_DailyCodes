import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App />
    <App />
    <App />
    <App />

  </StrictMode>,
)


  
// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   " Heading 01"
// );
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title2",
//   },
//   " Heading No.02"
// );

// const MainCard=<>
// <h1>main heading</h1>
// <p>main heading ka content</p>
// <p>Lorem, ipsum dolor.</p>
// </>


// const Footer= (
//   <>
//   <ul>
//     <li>contact us</li>
//     <li>insta</li>
//     <li>facebook</li>
//   </ul>
//   <p>Lorem ipsum dolor sit amet.</p>
//   </>
// )
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading1,
//   MainCard,
//   MainCard,
//   MainCard,
//   MainCard,
//   Footer
// ]);

// // create root using createRoot
// const root = ReactDOM.createRoot(document.getElementById("utkarsh"));
// // passing react element inside root
// root.render(container);


