// ==========================================
// 1. TRADITIONAL VANILLA JAVASCRIPT (DOM API)
// ==========================================
// In regular JavaScript, we interact directly with the browser's DOM (Document Object Model):
// const heading = document.getElementById("heading");
// heading.innerHTML = "Hi, this is modified using the Browser DOM Web API";
//
// PROBLEM WITH DIRECT DOM MANIPULATION:
// Direct DOM updates are expensive and slow for large applications.
// React solves this using a "Virtual DOM" (a lightweight in-memory representation of the UI).

// ==========================================
// 2. CREATING AN ELEMENT WITH REACT
// ==========================================
// React.createElement(type, props, ...children)
// - 1st param: HTML tag name ('h1', 'div', etc.) or a Component
// - 2nd param: Object with attributes/props ({ id: "heading", className: "title" })
// - 3rd param: Children / content to put inside the tag ("Hello React")
const heading = React.createElement("h1", { id: "heading" }, "Hello React");

// NOTE: 'heading' here is NOT a real HTML element yet!
// It is just a plain JavaScript object (Virtual DOM element):
// {
//    type: "h1",
//    props: { id: "heading", children: "Hello React" }
// }
console.log("Virtual DOM Object created by React.createElement:", heading);

// ==========================================
// 3. GETTING THE MOUNT POINT (HOST CONTAINER)
// ==========================================
// We find the HTML <div> in index.html where React will insert the generated elements.
const rootElement = document.getElementById("root");

// ==========================================
// 4. RENDERING TO THE ACTUAL DOM
// ==========================================

// --- APPROACH A: React 17 and earlier (Legacy) ---
// ReactDOM.render(reactElement, domContainerNode)
// Takes the React object, converts it into real browser HTML elements, and replaces the contents of root.
ReactDOM.render(heading, rootElement);

// --- APPROACH B: Modern React 18+ (Recommended) ---
// In React 18, createRoot is introduced to support Concurrent Mode features.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);