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
Props  !!!!METHOD 1!!!!
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
//Prop destructring   !!!!!!!METHOD 2!!!!!
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
---------------------------------------------------------------------------
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

key should be given (list items should have a key?)
<h2 key={task.id}>{task.text}</h2>))}
------------------------------------------------------------------------
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Button component--->Button.js  [button element not Buttton Component]----->Button.css

---------------------------------------------------------------------------
React ICONS
npm -i react-icons

"icon is a componnet"

import { FaTimes } from "react-icons/fa";   <!-- FontAwsome -->

------STYLING DIFFERENCE-----------------------------------------------------------

1.Normal External CSS
.FaTimes{
color:red;
cursor:pointer;
position:absolute;
right:20px;
}

2.Inline CSS in JSX
<FaTimes style={{color:"red",cursor:"pointer",position:"absolute",right:"20px"}}/>

3.CSS Script IN JSX
<h2 style={Heading2Style}>{props.prop}</h2>
const Heading2Style={
    color:"red",
    backgroundColor:"black"
}
---------------------------------------------------------------------------------------
Delete Working
1.App.js has tasks Array(BISON) with State (UseState)
2.SetTask is function to change tasks array
3. A function called deleteTask will use the id to change tasks using SetTask
4. This function is passed to a single task  as prop(App.js--->Tasks.js--->Single_Task.js) Along with each task
5.that single_task will call deleteTask by passing task.id whcih is also passed parrellely
6.This code executed in App.js 
7.DeleteTask has a filter function which remove task with particular id
-----------------------------------------------------------------------------------------
If else in JSX

      {tasks.legth>0?  /* if part */
       <Tasks  tasks={tasks} onDelete={deleteTask}/>  <!-- include this component --> 
       :"No Tasks To Show"}  /* else part */

------------------------------------------------------------------------------------------
JAVSCRIPT ACTUALLY WORK IN JSX

i hava boolean value which does not show in HTML tag inside js (JSX) file
single_task.virgin
So changed to  single_task.virgin.toString()

------------------------------------------------------------------------------------------
Change Atrributes
SetTask in the "changeState" function of array "tasks"

const toogleVirgin = (id)=>{
  setTasks(tasks.map((task)=>{task.id ===id? {...task,virgin:!task.virgin}:task}))}
<!-- if incoming id is similar to the single task then chane its remoder to opposite -->

SPREAD ACRROSS FUNCTION
<!-- var parts = ['two', 'three'];
var numbers = ['one', ...parts, 'four', 'five']; // ["one", "two", "three", "four", "five"] -->
-------------------------------------------------------------------------------------------
CHANGE CLASS NAME OF JSX ELEMENT(HTML) USING IF ELSE

 <div className= {single_task.virgin == true ?"SingleTaskTrue":"SingleTaskFalse"}>

------------------------------------------------------------------------------------------

Component Level State and App level State
useState decalred inside a low level componet (text in Addform) 
useState decalred inside a App.js componet (eg:task which should be able to access anywhre)

-----------------------------------------------------------------------------------

Convention
React component Name is Capiatl letter start
same name to file also

------------------------------------------------------------------------------------
import {useState} from 'react'

import './addform.css'
const Addform = () => {

    /* state for each field ,setText is method to update state  */
    const [text,setText] = useState('')   /* default is an empty string  */
    const [virgin,setVirgin] = useState(false) /* default of virgin is false */

    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="">TASK</label>
                <input type="text" placeholder="add task" 
                value = {text} 
                onChange ={(e)=>setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="">Virgin</label>
                <input type="checkbox" value = {virgin} 
                onChange ={(e)=>setVirgin(e.currentTarget.checked)}/>
            </div>
            <div>
                <input type="submit" value="saveTask"/>
            </div>
        </form>
    )
}
export default Addform


HERE

<!-- two variables with state and stateChangeMethod -->
const [text,setText] = useState('')   /* default of text  is an empty string  */
const [virgin,setVirgin] = useState(false) /* default of virgin is false */

1.taking and chaging value of   "text"
<input type="text" placeholder="add task" 
value = {text} 
onChange ={(e)=>setText(e.target.value)}  --><!-- setText will change the value of text which shows up in value prop  (value = {text})
/> -->
2. taking and chaging value  of boolean
                <input type="checkbox" 
                checked = {virgin}
                value = {virgin} 
                onChange ={(e)=>{
                    setVirgin(e.currentTarget.checked)
                    console.log(`"value is"+ ${e.currentTarget.checked}`)

------------------------------------------------------------------------------------

DESTRUCTRING
Normally passing argument 
 
def function fun(arg 1, arg 2,arg4)
executing fun(1,2,3)

but in destrucring

def function fun(arg1key :arg1value , arg 2:arg2value,arg4:arg4)
executing fun({arg1key})


.....
Spread Across

task = [1,2,3]
...task = [1,2,3]
-------------------------------------------------------------------------------------------------------
You ca use Either Destrucring or prop
1.Prop
Component Call
 <Header prop="TaskManager"  showAddprop={showAdd} /> 

actual component
const Header = (props) => {
    ......
    ......
    props.prop
    props.showAddprop()

2.Destuctring Prop

Component Call
 <Header prop="TaskManager"  showAddprop={showAdd} /> 

actual component
const Header = ({prop,showAddprop}) => {
    ......
    ......
    prop
    showAddprop()
--------------------------------------------------------------------------------

HOW TO CHANGE VALUES OF STATE

1. Single Values:
    
    const [showadd,setShow] =useState(false)    --->State Declaration
    setShow(!showadd)                           ---->change value

2.An array
    const [tasks,setTasks] = useState    ([{}, {}, {} ])--->State Declaration

    2.1 ADD
    newTask = {}             ---->Create value
    setTasks([...tasks,newTask])    ---->Add value
    2.2 CHANGE
    id =  ""   --->get value
    setTasks(tasks.map((task)=>task.id ===id? {...task,virgin:!task.virgin}:task)) ---->change value
    2.3 DELETE
    id = 2    ---->fetch id 
    setTasks(tasks.filter((tasks)=>tasks.id!==id)) ----> delete value
