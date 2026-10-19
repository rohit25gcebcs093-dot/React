import Food from "./Food";

function List(){
    const [foodItems,setFoodItems]=useState(["Apple","Orange","Banana"]);

    function handlChange(){
        setFoodItems(["Mango",...foodItems]);
    }

    return(
        <>
        <button onClick={handlChange}>Increment</button>
        <Food food={foodItems}></Food>
        </>
    )
}

export default List;