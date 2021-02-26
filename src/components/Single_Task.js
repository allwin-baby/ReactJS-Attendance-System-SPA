import './Single_Task.css'
import { FaTimes } from "react-icons/fa";
const Single_Task = ({single_task,onDelete,onToggle}) => {
    return (
        <div className= {single_task.virgin === true ?"SingleTaskTrue":"SingleTaskFalse"} onDoubleClick={()=>onToggle(single_task.id)}>
            <h3 key={single_task.id}>{single_task.text}</h3>
            {/* key can be inserted in calling widget */}
            <h3>{single_task.virgin.toString()}</h3>
            <FaTimes 
            style={{color:"red",cursor:"pointer",position:"absolute",right:"5%" ,top:"48%"}}
            onClick={()=>onDelete(single_task.id)}  /* calling the deleteTask function (passed as onDelelete) in App.js with id passedon */
            />
        </div>
    )
}


export default Single_Task
