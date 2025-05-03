import '../style/form.css'
import { useState } from 'react';
import {v4 as uuidv4 }  from 'uuid' ;   
function FormTask ({props}){

    const [text,setText] = useState(''); 

    const manejarCambio = e =>{
       setText(e.target.value);

    }
    const manejarEnvio  = e =>{
        e.preventDefault(); 
        console.log("enviando formulario");
        const tareaNueva = {
            id : uuidv4() ,
            texto : text , 
            complete : false 

        }

        props.onSubmit(tareaNueva);
    }
    return(
        <div>
            <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
                <input 
                type="text" 
                className="tarea-input"
                placeholder="ingresa tu tarea "
                name="texto"
                onChange={manejarCambio}

                />
                <button className="tareab-btn" >Agregar tarea </button>
            </form>
            
        </div>
    );
}

export default FormTask ; 