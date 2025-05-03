import Task from "./Task";
import { useState } from "react";
import FormTask from "./FormTask";
import '../style/contenedor.css'
export default function Contenedor(){
const [tareas,setTareas] = useState([]);

const agregaerTarea = tarea=>{
    if(tarea.texto.trim())
        {
           
            tarea.texto= tarea.texto.trim(); 
            const tareaActual = [tarea ,...tareas] ;
            setTareas(tareaActual);
    }
}
    return(
        <>
        <FormTask onSubmit= {agregaerTarea} />
        <div className="tarea-lista-contenedor">
              {
                tareas.map((tarea) => 
                    <Task 
                    key={tarea.id}
                    id={tarea.id}
                    text={tarea.texto}
                    complete={tarea.complete}
                     />
               
                ) 
              }
        </div>
        </>
    );
}