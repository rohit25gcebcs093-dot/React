import {useState} from 'react';
function App(){
    const[time,setTime]=useState(0);
    const intervalIdRef=useRef(null);

    function handleStart(){

        if(intervalIdRef.current!=null){
            return;
        }

        intervalIdRef.current=setInterval(()=>{
            setTime(time=>time+1);
        },1000);
    }

    function handlestop(){
        clearInterval(intervalIdRef.current);
        intervalIdRef.current!=null;

    }

    function handleReset(){
        classInterval(intervalIdRef.current);
        intervalIdRef.current!=null;
        setTime(0);
    }

    return(
        <>
        <h1>Stopwatch:{time}</h1>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlestop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    ) 
}

export default App;