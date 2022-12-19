import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './components/login.jsx'
import NewUSer from "./pages/User_new"
import NewNotas from "./pages/NotasNew.js";
function App(){
 return(
  <div className ="App"> 
  <NewNotas/>
  <NewUSer/>
  </div>
 );
}  
export default App;