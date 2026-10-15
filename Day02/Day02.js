//JSX:JAvascript XML--> Looks like HTML

// const element=<h1 id="title">Hello Coders</h1>;

//Babel: It is used to automatically convert above html like command into
// this---> const element=React.createElement('h1',{id:'title'},"Hello Coders");

// Also used to create JSX into React.createElement()


// React Element
// const element2=(<div>
//     <h1>Hello</h1>
//     <h2>Hii</h2>
// </div>);


// const root=ReactDOM.createRoot(document.createElementById('root'));
// root.render(element);

//JSX-->React.createElement()-->React element(JS Object)-->Real DOM(HTML ELEMENT)

//React component is nothing but only function()
//Function name first letter was capital--.It's compulsory. 

function App(){
    return(
        <h1>Hello Coders</h1>
    );
}

const root=ReactDOM.createRoot(document.createElementById('root'));
root.render(App());
//OR
root.render(<h1>Hello Coders</h1>); 
//OR
root.render(<App/>);

//OR
// Also const a=<App/>
// root.render(a);

function App(name){
    return(
        <h1>Hello Coders {name}</h1>
    );
}

const a=App("Rohit");
const root1=ReactDOM.createRoot(document.createElementById('root'));
root.render(a);


function App(name){
    return(
        <h1>Hello Coders {10+20}</h1>
    );
}

const b=App("Rohit");
const root2=ReactDOM.createRoot(document.createElementById('root'));
root.render(b);
