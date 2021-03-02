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
import { useState } from 'react'
import Addform from './form/Addform'
function App() {

  const [showadd, setShow] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "ALLWIN",
      virgin: true
    },
    {
      id: 2,
      text: "ASHISH",
      virgin: true
    },
    {
      id: 3,
      text: "JINTO",
      virgin: false
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1 //ID IS SET RANDOMLY
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])     /* wrong  :setTasks(...tasks,newTask)    */
  }
  const toogleVirgin = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, virgin: !task.virgin } : task))
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))  /* setTasks is the method declared in State of tasks */
  }
  const showAdd = () => {
    setShow(!showadd)      /*  REMEBER */  /*  (setShow(showadd=!showadd)) <-----WRONG*/
    console.log(showadd)
  }

  return (
    <div className="container">
      <Header prop="React JS SPA Attendance System" showAddprop={showAdd} showState={showadd} /> <br />
      {showadd == true ?
        <Addform onAdd={addTask} /> : <h4 style={{textAlign: 'center'}}>DOUBLE CLICK TO CHANGE ATTENDANCE</h4>}
      {/* if else in JSX */}
      {tasks.length > 0 ?  /* if part */
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleVirgin} />
        : "No Records To Show"}  {/* else part */}
      {/* passing tasks (BSON OBJECT) as prop to Task.js component */}
      {/* onDelete is not a keyword it is just a prop (carries a function) name just like tasks.The function is carried all the way down to individual task*/}
    </div>
  );
}
export default App;
