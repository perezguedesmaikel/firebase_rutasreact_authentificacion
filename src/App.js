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
            setUsuario(usuarioFirebase);
        })
    },[]);
  return (
    <div className="App">
        <Routes>

            {usuario?<Route path="registrar" element={<Registrar setusuario={setUsuario}/>}/>:<Route path="registrar" element={<Login setUsuario={setUsuario}/>}/>}
            {usuario?<Route path="/" element={<Home/>}/>:<Route path="/" element={<Login setUsuario={setUsuario}/>}/>}
        </Routes>

    </div>
  );
}

export default App;
