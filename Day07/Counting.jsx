import {useState} from "react";

function Counting({name}){

    const [count,setCount]= useState(0);

    return(
        <>
        <div>
            <p>
                Our First Counter App:{name}
            </p>
            <h2>
                Counter: {count}
            </h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        </>
    )
}


export default Counting; 