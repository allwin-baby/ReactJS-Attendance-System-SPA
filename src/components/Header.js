import PropTypes from 'prop-types'
import Button from "./Button"
import './Header.css'
const Header = (props) => {
    function onClickFun(e){
        console.log(e)
        console.log("IAM CLICKED")
    }
    return (
        <div className="Header">
            <h1 style={Heading2Style}>{props.prop}</h1>
            <Button  text="CLICK HERE" onClickFun={onClickFun}/>
        </div>
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
const Heading2Style={
    position:"absolute",
    left: "20px"
}
export default Header
