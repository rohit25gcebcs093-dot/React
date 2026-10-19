function Food({foods}){
    return(
        <>
        <ul>
            {foods.map(food=><li>{food}</li>)}
        </ul>
        </>
    )
}

export default Food;