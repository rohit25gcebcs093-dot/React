import {useState} from "react";
import Coounting from "./Counting";

function Clock(){
    const [clocks,setClocks]=useState(["A","B","C"]);

    function handlChange(){
        setClocks(["D",...clocks]);
    }

    return(
        <>
        <button onClick={handlChange}>Increment Clocks</button>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {clocks.map(clock=><Counting name={clock}></Counting>)}
        </div>
        </>
    )
}

export default Clock;