import {useState} from "react";

function App(){
  const [count , setCount]= useState(0);

  function increaseNumber(){
    setCount (count+1);
  }

  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={increaseNumber}>Increment:{count}</button>
    </>
  )
  
}

export default App;