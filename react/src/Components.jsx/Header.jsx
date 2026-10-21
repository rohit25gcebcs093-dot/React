import Display from "./Display";

function Header({count}){
     return(
        <>
        <h1>I am Blinkit</h1>
        <Display count={count}/>
        </>
     )
}

export default Header;