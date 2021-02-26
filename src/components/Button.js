import './Button.css';
import PropTypes from "prop-types"
//Prop destructring
const Button=({text,onClickFun})=>{
    return(
        <>
        <button onClick={onClickFun}>{text}</button>
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