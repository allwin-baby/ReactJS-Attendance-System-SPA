//change language mode in cmd pallete to javascriptreact to work with autocompletion ofJSX

/* class based component */
/* class App extends React.Component{
  render(){
    return <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
  }
} */
import React from "react"
import './App.css';
import Tasks from './components/Tasks'
import Header from "./components/Header"  //importing Header component from Header.js
import {useState} from 'react'
import Addform from './form/Addform'
function App() {
  const [tasks,setTasks] = useState    ([
    {
    id:1,
    text:"ALLWIN",
    virgin:true
    },
    {
    id:2,
    text:"SHAJAHAN",
    virgin:true
    },
    {
    id:3,
    text:"SUN",
    virgin:false
    }
])

const addTask = (task)=>{
  const id = Math.floor(Math.random() * 1000) + 1 
  const newTask = {id,...task}
  setTasks([...tasks,newTask])     /* wrong  :setTasks(...tasks,newTask)    */ 
}
const toogleVirgin = (id)=>{
  setTasks(tasks.map((task)=>task.id ===id? {...task,virgin:!task.virgin}:task))
}
const deleteTask = (id)=>{
  setTasks(tasks.filter((tasks)=>tasks.id!==id))  /* setTasks is the method declared in State of tasks */
}


  return (
    <div className="container">
      <Header prop="TaskManager"/> <br/> 
      <Addform onAdd={addTask}/> 
      {/* if else in JSX */}
      {tasks.length>0?  /* if part */
       <Tasks  tasks={tasks} onDelete={deleteTask}  onToggle={toogleVirgin}/>   
       :"No Tasks To Show"}  {/* else part */}
    {/* passing tasks (BSON OBJECT) as prop to Task.js component */}
    {/* onDelete is not a keyword it is just a prop (carries a function) name just like tasks.The function is carried all the way down to individual task*/}
    </div>
  );
}
export default App;
