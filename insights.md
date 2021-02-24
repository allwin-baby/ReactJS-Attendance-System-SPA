//change language mode in cmd pallete to javascriptreact to work with autocompletion ofJSX fo App.js
//run "sudo npm start" instead of "npm start"
//index.html->root id----------->index.js<----App.js(function template)
------------------------------------------------------------------------
///components-->class/function(hooks)
//component should only have one parent
component use  JSX ,difference we cant use class in react instead uses className, for--->htmlFor

ES7 React/Redux/GraphQL/React-Native snippets    DOWNLOAD
rafce---->Function Based componet 

------------------------------------------------------------------------
Componets

1. Function Component
function App() {
    const text = "HELLO ALLWIN KEEP MOTIVATED"
  return (
    <div className="constainer">
     <h1>{text}</h1>
    </div>
    //ERROR
    <p>
    </p>
    //ERROR
  );
}

2.Class Based Component

import React from "react"  //IMP
class App extends React.Component{
  render(){
    return <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
  }
} */
-----------------------------------------------------

INSERT A DYNAMIC INSIDE A COMPONNENT

use---->  {}
*/
-----------------------------------------------------
const Tasks = () => {
    return (
        <> empty tag not a problem but only one Parent tag must
        /*  ALL TAGS GOES HERE*/
        </>
    )
}
export default Tasks
*/
-----------------------------------------------------
Props
custom container functions are imported to other containers.While calling child container from parent container we can pass arguments called Props  
>>App.js
import Header from "./components/Header"  //importing Header component from Header.js
function App() {
  return (
    <div className="container">
      <Header prop="this is a prop coming from app.js to header.js where header component is importrd to app.js "/> <br/>  
     <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
    </div>
  );
}

>>Componets/Header.js
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>This is imported from Header.js</h1>
            <h2>{props.prop}</h2>
            <h2>{props.title}</h2>
        </header>
    )
}
Header.defaultProps={
    prop : "This is the default prop",
    title:  "default title"
}
Header.propTypes={
    title: PropTypes.string.isRequired
}
export default Header
--------------------------------------------------------------------------
//Styling

<!-- The hierarchy is following order 
index.html --- a root tag 
index.js -----index.css is imported
         ------App container is injected
                                        [
                                        import './index.css';
                                        import App from './App';


                                        ReactDOM.render(
                                        <React.StrictMode>
                                            <App />
                                        </React.StrictMode>,
                                        document.getElementById('root')
                                        );
                                        ]
App.js --------header is called
Header.js ------Button is called

But.......All the containers are finally comes in index.html under root div element 
So index.css applicable to all js files(Button.js,Header.js)!!!!!!! -->

import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>This is imported from Header.js</h1>
            <h2 style={Heading2Style}>{props.prop}</h2>   ---->styling
            <h3 style={{color:"green", backgroundColor:"blue"}}>{props.title}</h3>
        </header>
    )
}
Header.defaultProps={
    prop : "This is the default prop",
    title:  "default title"
}
Header.propTypes={
    title: PropTypes.string.isRequired
}
//CSS IN JSX
const Heading2Style={ ----->Styling
    color:"red",
    backgroundColor:"black"
}
export default Header
-----------------------------------------------------------------------
//Prop destructring
import PropTypes from "prop-types"
const Button=({color,text})=>{
    return(
        <button style={{
            backgroundColor: "yellow",
            border: "none",
            color: color,
        }}>{text}</button>
    )
}
Button.defaultProps={
    color:"green",
    text:"CLICK ME!"

}
export default Button
--------------------------------------------------------------
CSS VS REACT STYLING ( INSIDE FUNCTION CONTAINER)
const Button=({color,text})=>{
    return(
        <button style={{
            backgroundColor: "yellow",
            border: "none",
            color: color,
        }}>{text}</button>
    )
}

.button {
  background-color: #4CAF50; //wont work  ---> backgroundColor: "yellow",
  border: none;
  color: white;
  padding: 15px 32px;  //wont work
  text-align: center;   
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
-----------------------------------------------------------
Events in JSX
onClick Event
//Header.js  (Button is inside Header)

const Header = (props) => {
    //passing function defintion with Button Prop
    function onClickFun(e){
        console.log(e)
        console.log("IAM CLICKED")
    }
    return (
        <header>
            <h1>This is imported from Header.js</h1>
            <h2 style={Heading2Style}>{props.prop}</h2>
            <h3 style={{color:"green", backgroundColor:"blue"}}>{props.title}</h3>
            <br/>
            {/* We can pass custom function to Button component or use same function written inside Button component */}
            <Button color="green" text="CLICK HERE" onClick={onClickFun}/>
        </header>
    )
}
Button.js

const Button=({color,text,onClickFun})=>{
    return(
        <button 
        onClick={onClickFun}
        style={{
            backgroundColor: "yellow",
            border: "none",
            color: color,
        }}>{text}</button>
    )
}
--------------------------------------------------------------
Array to Component
>>Task.js

const tasks =[
    {
    id:1,
    text:"ALLWIN",
    virgin:"YES"
    },
}
const Tasks = () => {
    return (
        <>
        {tasks.map((task)=> (
        <h2 key={task.id}>{task.text}</h2>))}    /*(<h2 key={task.id}>{task}</h2>) Error: Objects are not valid as a React child (found: object with keys {id, text, virgin}). If you meant to render a collection of children, use an array instead. */
        </>
    )
}
export default Tasks
-----------------------------------------------------------------
STATES
to use State inside a function we use hook called useState comes directly from react

import {useState} from 'react'
const [tasks,setTasks] = useState([{data1},{data2}])-
---->
1."tasks" is the "name of state" and  "setTasks"
2.is the "function to update the state" so we can't use tasks.push()
3. Array is the default state