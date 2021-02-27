import {useState} from 'react'
import './addform.css'
const Addform = ({onAdd}) => { /* wrong :const Addform = (onAdd) => 
    /* state for each field ,setText is method to update state  */
    const [text,setText] = useState('')   /* default is an empty string  */
    const [virgin,setVirgin] = useState(false) /* default of virgin is false */
    const onSubmit = (e)=>{ 
        e.preventDefault()   /* to prevent reload on submit? */
        if(!text){  
            alert("please add task")
            return 
        }
        console.log(typeof(virgin))
        onAdd({text,virgin}) 
        setText('')
        setVirgin(false)
    }
    return (
        <form className="add-form"   onSubmit={onSubmit} >  {/* onSubmit call 
        onSubmit which check and validate the call addTask which will pass task as {object} to App.js */}
            <div className="form-control">
                <label htmlFor="">TASK</label>
                <input type="text" placeholder="add task" 
                value = {text} 
                onChange ={(e)=>{setText(e.target.value)
                    console.log(`"value is"+ ${text}`)}
                }
                />
            </div>

            <div className="form-control">
                <label htmlFor="">Virgin</label>
                <input type="checkbox" 
                checked = {virgin}
                value = {virgin} 
                onChange ={(e)=>{
                    setVirgin(e.currentTarget.checked)
                    console.log(`"value is"+ ${e.currentTarget.checked}`)
                }
                }/>
            </div>
            <div>
                <input type="submit" value="saveTask"  />
            </div>
        </form>
    )
}
export default Addform
