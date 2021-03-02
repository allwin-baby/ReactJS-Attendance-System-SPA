1.Install nodejs
2.install npm
3.npx create-react-app firstapp
4.Directory Structure
    >public
        >Index.html Entry Point
    >src
    >Index.js (Contain App.js embeded)
    >App.js React app entrance
5.npm start 

Index.html
   <body>
    <div id="root"></div>
  </body>

Index.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Components
-----------
UI is list of components
component
1.Function Components (Introductionof hook allowed to useState in Function based Components)
2 Class Components(Deprecated)

>function ComponentName() {
    return (
        <div>
            A component Should have only one Parent in return statement
            <Component prop = ""/>  This is how insert component in another component in JSX  ,Prop pass data to one componet frm another
        </div>
    )
}
export default ComponentName

JSX -->react UI
html+js
diffrence :attributes of html have different Name ;Eg:ClassName instead of class
           JSX styling inside tags of components is different

State
import {useState} from 'react'
Data have State
hooks allows to use states inside function Components

Hooks
function which manage State
useState -->return a stateful value and a function to update it 

>const [showadd,setShow] =useState(false) 
//false is the default value 
showadd : name of state 
setShow :Updatate function

Component

Taks is a componet having props tasks ,onDelete and onToggle
>>   <Tasks  tasks={tasks} onDelete={deleteTask}  onToggle={toogleVirgin}/>

const Tasks = ({tasks,onDelete,onToggle}) => {  Destructuring
    return (
        <div className="Tasks">
        </div>
    )
}

Only ONE html file rest taken care by each and every js components


reactDom will do the routing
SPA working
routing is done on the front-end not in back-end


CSS Styling

Each componet is ultimately going to be in the index.html
so index.css will do all css for every component
Also we can add css file to each component inside and sepearate file

NB:Position Outermost element is absolute and overflow management is done
Rest elemts are positioned relatively
no width and height (if yes  in percentage)
top:10px

NB:Key should be provided to each elemnt is a dynamic list

NB:For appearing and disappering tags create a booelean and use if else statement in
JSX the tags should be placed relatively

Check form.js