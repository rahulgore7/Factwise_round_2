import { useState } from "react";

function App() {
const [count, setCount]=useState(0)
  // implement this function to increment the count 
  const incrementCount = () => {
    setCount(count+1)
  }
  // implement this function to decrement the count 

  const decrementCount = () => {
    setCount(count-1)
  }
  
  return (
    <div>

      {/* remove the harded coded zero and use state the show the value of count */}
      <div>Count: {count}</div>
      {/*  */}
      <button onClick={incrementCount}>incrememt</button>
      
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
