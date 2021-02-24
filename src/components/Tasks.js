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
import {useState} from 'react'
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
export default Tasks 
