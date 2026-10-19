import {useEffect, useState} from "react";

function Clock(){
    const[time,setTime]=useState(new Date().toLocateTimeString());
    const [show,setShow]=useState(true);

    useEffect(()=>{
        if(!show)
            return;

        const intervalId=setInterval(()=>{
            setTime(new Date().toLocateTimeString());
            console.log("Hi");
        },1000)

        return()=>{
            clearInterval(intervalId);
        }
    },[show])

    return(
        <>
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {
            show&&<h1>Current Time:{time}</h1>
        }
        </>
    )
}

export default Clock;