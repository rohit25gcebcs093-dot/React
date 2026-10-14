//Create a h1 element using JS

const element1=document.createElement('h1');
element1.textContent="Hello Coder Army";
element1.className='element';
element1.id='first';
element1.style.fontSize="30px";
element1.style.backgroundColor="orange";
element1.style.color="white";

const element2=document.createElement('h2');
element2.textContent="Strike is coming";
element2.className='element';
element2.id='second';
element2.style.fontSize="30px";
element2.style.backgroundColor="pink";
element2.style.color="green";


const root=document.getElementById('root');
root.append(element1); 
root.append(element2);


