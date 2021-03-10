//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

var num = 5;

ReactDOM.render(
  <div>
    <h1>My favourive food</h1>
    <ul>
      <li>noodles</li>
    </ul>
    <p>the lucky number is {num}</p>
  </div>,
  document.querySelector("#root")
);
