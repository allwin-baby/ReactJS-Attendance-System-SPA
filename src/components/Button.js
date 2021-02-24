
import PropTypes from "prop-types"
//Prop destructring
const Button=({color,text,onClickFun})=>{
    return(
        <>
        <p>HELLO
            </p>
        <button 
        onClick={onClickFun}
        style={{
            backgroundColor: "yellow",
            border: "none",
            color: color,
        }}>{text}</button>
        </>
    )
}
Button.defaultProps={
    color:"green",
    text:"CLICK ME!"

}
Button.propTypes={
    onClickFun:PropTypes.func
}
export default Button