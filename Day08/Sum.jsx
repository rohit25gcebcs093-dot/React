function Sum(){
    function calculateSum(){
        let sum=0;
        for(let i=0;i<1000;i++){
            sum+=i;
        }
        return sum;
    }

    const total=calculateSum(); 

    return(
        <>
        <h1>This is our math library</h1>
        <h2> Sum: {total}</h2>
        </>
    )
}