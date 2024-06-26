import React from "react";
import { useState } from "react";

const Counter = () => {
  // all the use states should be extracted to the top of the function
  // cannot be used inside a loop, condition or nested function
  const [counter, setCounter] = useState(10);

  return (
    <div className="col-12 col-md-2 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <button className="btn btn-success m-1">+1</button>
      <button className="btn btn-danger m-1">-1</button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counter}</span>
      </span>
    </div>
  );
};

export default Counter;
