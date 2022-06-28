import React from "react";
import {app} from '../fb'

function Home() {
    const cerrarSesion= async () => {
        await app.auth().signOut().then();
    }
    return(
        <div>Home
            <button type='button' onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>


    )

}
export default Home;