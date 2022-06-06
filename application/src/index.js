import React from "react";
import ReactDom from "react-dom";
import base from "./css/base.css";

// function Greeting() {
//   return (
//     <div>
//       <h1 className="test">Hello World</h1>
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         <li>Item 4</li>
//         <li>
//           <a href="#">This is an example link test. </a>
//         </li>
//       </ul>
//       <div>
//         <SecondGreeting />
//         <ThirdGreeting />

//         {/* This is a comment test. */}
//         {/**
//          * This is a multi-line comment test.
//          * The line below is a re-use of a component.
//          */}
//         <SecondGreeting />
//       </div>
//     </div>
//   );
// }

// function SecondGreeting() {
//   return (
//     <div>
//       <h3>This is rendered via SecondGreeting().</h3>
//     </div>
//   );
// }

// function ThirdGreeting() {
//   return <h3>Did someone summon third Greeting.</h3>;
// }

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

function Book() {
  return <article>This is a book.</article>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
