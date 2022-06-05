import React from "react";
import ReactDom from "react-dom";

let i = 10;

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
