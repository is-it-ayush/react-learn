import React from "react";
import ReactDom from "react-dom";
import base from "./css/base.css";
import { useState } from "react";

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

// Data Test. Following is a mock of data which can be fetched through API.
var titles = [
  "Ikigai: The Japanese Secret to a Long and Happy Life",
  "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
  "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  "The 48 Laws of Power",
  "The Art of War",
  "How to Win Friends & Influence People",
];
var authors = [
  "Héctor García, Francesc Miralles",
  "Morgan Housel",
  "James Clear",
  "Robert Greene",
  "Sun Tzu",
  "Dale Carnegie",
];

var imglink = [
  "https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41y1sBiezmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41mUhMo3qvL._SX322_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41C9YOYkkOL._SX320_BO1,204,203,200_.jpg",
];

function BookList() {
  //This stores the book list which is rendered.
  const list = [];

  //This is a test for using statefulness of React Components.
  var [val, setval] = useState(0);

  //To fill up the above list[] with Books and their prop i
  for (var index = 0; index < titles.length; index++) {
    list.push(<Book i={index} />);
  }

  // Return the entire app.
  return (
    <section className="list">
      {/** Button updates the val defined above as a updateable var. */}
      <button onClick={() => setval((val += 1))}>Increment</button>
      <p>The value is: {val}</p>

      {list}
    </section>
  );
}

function Book(props) {
  //Takes up props.
  return (
    <article className="book-card">
      {/** Since the lists are already sorted (representing mock data in order). I can directly assign prop values to each without worry. */}
      <Image i={props.i} />
      <Title i={props.i} />
      <Author i={props.i} />
    </article>
  );
}

// The other components, they take up props and finally we get each specific component.
const Image = (props) => <img src={imglink[props.i]} alt="" height="300px" />;
const Title = (props) => <h2 className="title">{titles[props.i]}</h2>;
const Author = (props) => <h1 className="author">{authors[props.i]}</h1>;

//Important: This renders our BookList Component.
ReactDom.render(<BookList />, document.getElementById("root"));
