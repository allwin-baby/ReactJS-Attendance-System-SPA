import './Button.css';
import PropTypes from "prop-types"
//Prop destructring
const Button=(props)=>{
    return(
        <>
        <button onClick={props.onClickFun}>{  props.showState ==false? "ADD TASK":"CLOSE TASK"}</button>
        </>
    )
}
Button.defaultProps={
    text:"think you Didnt pass a prop"

}
Button.propTypes={
    onClickFun:PropTypes.func
}
export default Button