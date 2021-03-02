import PropTypes from 'prop-types'
import Button from "./Button"
import './Header.css'
const Header = ({prop,showAddprop,showState}) => {
    /* const test=()=>{
        console.log(showState)
    } */
    return (
        <div className="Header">
            {/* <button onClick={test}>test</button> */}
            <h1 style={Heading2Style}>{prop}</h1>
            <Button  text="Add New Student" onClickFun={showAddprop} showState= {showState}/>
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
