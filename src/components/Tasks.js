/* 
1.Array to component
const tasks =[
    {
    id:1,
    text:"ALLWIN",
    virgin:"YES"
    },
    {
    id:2,
    text:"SHAJAL",
    virgin:"YES"
    },
    {
    id:3,
    text:"SUNNY",
    virgin:"NO"
    }
]
const Tasks = () => {
    return (
        <>
        {tasks.map((task)=> (
        <h2 key={task.id}>{task}</h2>))}
        </>
    )
}
export default Tasks */
/*2.Tasks Array as "ComponentState" */
/* import {useState} from 'react'
const Tasks = () => {
    const [tasks,setTasks] = useState    ([
        {
        id:1,
        text:"ALLWIN",
        virgin:"YES"
        },
        {
        id:2,
        text:"SHAJAL",
        virgin:"YES"
        },
        {
        id:3,
        text:"SUNNY",
        virgin:"NO"
        }
    ])
    return (
        <>
        {tasks.map((task)=> (
        <h2 key={task.id}>{task.text}</h2>))}
        </>
    )
}
export default Tasks */

/* To access Task globally to all components we can use Redux,Context API etc....
But for Now Task is given in App.js so every components can use it
Like pass along with "props" to Task.js Components
*/
import "./Task.css";
import Single_Task from "./Single_Task"
const Tasks = ({tasks,onDelete,onToggle}) => {  /* The onDelete prop passed from App.js */
    return (
        <div className="Tasks">
        {tasks.map((task)=> (    <Single_Task single_task ={task} onDelete={onDelete} onToggle = {onToggle}/>))} {/* to create multiple task */}
        {/* <h2 key={task.id}>{task.text}</h2> */}
        </div>
    )
}
export default Tasks 
