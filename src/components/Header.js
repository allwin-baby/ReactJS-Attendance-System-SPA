import PropTypes from 'prop-types'
import Button from "./Button"
const Header = (props) => {
    function onClickFun(e){
        console.log(e)
        console.log("IAM CLICKED")
    }
    return (
        <header>
            <h1>This is imported from Header.js</h1>
            <h2 style={Heading2Style}>{props.prop}</h2>
            <h3 style={{color:"green", backgroundColor:"blue"}}>{props.title}</h3>
            <br/>
            {/* We can pass custom function to Button component or use same function written inside Button component */}
            <Button color="green" text="CLICK HERE" onClickFun={onClickFun}/>
        </header>
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
    color:"red",
    backgroundColor:"black"
}
export default Header
