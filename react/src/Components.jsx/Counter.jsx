import {useState} from "react";


function Counter(){
    

    return(
        <>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count=>count+1)}>Increment</button>
        <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
        </>
    )
}

export default Counter;