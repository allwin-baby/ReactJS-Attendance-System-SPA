//change language mode in cmd pallete to javascriptreact to work with autocompletion ofJSX
import React from "react"
import './App.css';
import Tasks from './components/Tasks'
/* class based component */
/* class App extends React.Component{
  render(){
    return <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
  }
} */

import Header from "./components/Header"  //importing Header component from Header.js
function App() {
  return (
    <div className="container">
      <Header prop="this is a prop coming from app.js to header.js where header component is importrd to app.js "/> <br/>  
     <h1>HELLO ALLWIN KEEP MOTIVATED</h1>
     <Tasks/>
    </div>
  );
}

export default App;
