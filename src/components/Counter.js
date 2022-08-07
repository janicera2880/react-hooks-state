import React, { useState } from "react";
/*useState will return an array that has two variables inside of it:

count: a reference to the current value of that state in React's internals
setCount: a setter function so we can update that state*/

function Counter() {
  //destructuring array method
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
//Setting State is Asynchronous