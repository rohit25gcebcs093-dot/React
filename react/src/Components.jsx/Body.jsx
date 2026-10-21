import Counter from "./Counter";

function Body({count,setCount}){

    return(
        <>
        <h1>I am Blinkit body</h1>
        <Counter count={count} setCount={setCount}/>
        </>
    )
}