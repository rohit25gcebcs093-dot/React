import {useState} from 'react'


function App(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[password,setPassword]=usestate('');


    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        console.log(age);
        console.log(password);
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={name} onCharge={(e)=>setName(e.target.value)}></input>
            </div>
             <div>
                <input type='number' value={age} onCharge={(e)=>setAge(e.target.value)}></input>
            </div>
             <div>
                <input type='password' value={password} onCharge={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}

export default App;