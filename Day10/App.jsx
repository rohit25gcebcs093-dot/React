import {useState} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App(){

    const[count,setCount]=useState(0);
 
    return(
        <>
        <Header count={count}/>
        <Body count={count} setCount={setCount}/>
        <Footer />
        </>
    )
}

export default App;