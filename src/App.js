import React, {useEffect, useState} from 'react';
import './App.css';
import {app} from "./fb";
import Home from "./components/home";
import Login from "./components/Login";
import Registrar from "./components/registrar";
import {Routes,Route} from "react-router-dom";
function App() {
    const [usuario,setUsuario]=useState(null);
    useEffect(()=>{
        app.auth().onAuthStateChanged(usuarioFirebase=>{
            console.log(usuarioFirebase);
            setUsuario(usuarioFirebase);
        })
    },[]);
  return (
    <div className="App">
        {usuario?<Home/>:<Login setUsuario={setUsuario}/>}



    </div>
  );
}

export default App;
