import React from "react";
import ReactDom from "react-dom";
import base from "./css/base.css";

function Greeting() {
  var i = 0;
  return (
    <div>
      <h1 className="test">Hello World {i}</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li onClick={(i += 1)}>
          <a href="#">This is an example link test. </a>
        </li>
      </ul>
      <div>
        <SecondGreeting />
      </div>
    </div>
  );
}

function SecondGreeting() {
  return (
    <div>
      <h3>This is rendered via SecondGreeting().</h3>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
