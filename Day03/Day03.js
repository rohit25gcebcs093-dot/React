const element=<h1>Hello Coders {"Rohit"}</h1>
//                              -------
//You can add any text/string expression in that above place

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
//true,false,null,undefined doesn't show any changes or error in output but object shows error.


const age=10;
const element2=<h1>Hello Coder {age>12?"Adult":"Kid"}</h1>
const element3=<h1>Hello Coder{<h2>Good Afternoon Everyone</h2>}</h1>
const root2=ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element2);
root2.render(element3);

const courses=["HTML","CSS","JAVASCRIPT","REACT"];
const element4=(
    <ul>
        {[<li>HTML</li>,<li>CSS</li>,<li>JAVASCRIPT</li>,<li>REACT</li>]}
        //OR
        {courses.map(course=><li>{course}</li>)}
    </ul>
)

const root4= ReactDOM.createRoot(document.getElementById('root4'));
root4.render(element4);

//props : Means that we receive multiple arguments

const ab={backgroundColor:"orange", color:"white"}
const element5=<h1 id="title" className="first" style={ab}>Hello Coder Army</h1>
function App(props){
    return (
        <h1>Hello Coders{props.name} {props.age}</h1>
    )
}
const element6=<App name="Rohit" age={30}></App>
const root5=ReactDOM.createRoot(document.getElementById('root5'));
root5.render(element6);
root5.render(element5);