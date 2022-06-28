import React from "react";
import {app} from '../fb';
import {useNavigate} from "react-router";

function Home() {
    const navigate=useNavigate();
    const cerrarSesion= async () => {
        await app.auth().signOut().then();
    }
    const registrar=()=>{
        navigate('/registrar');
    }
    return(
        <div>Home
            <button type='button' onClick={registrar}>Registrar</button>
            <button type='button' onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>


    )

}
export default Home;