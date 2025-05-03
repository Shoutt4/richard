import Task from "./Task";
import { useState } from "react";
import FormTask from "./FormTask";
import '../style/contenedor.css'
export default function Contenedor(){
const [count,setCount] = useState([]);

const agregaerTarea = (tarea)=>{
    console.log("xd");
    console.log(tarea)

}
    return(
        <>
        <FormTask onSubmit ={agregaerTarea}/>
        <div className="tarea-lista-contenedor">
              {
                count.map((count) => {
                    <Task 
                    text={count.text}
                    complete={count.complete}
                     />
                }
                )
              }
        </div>
        </>
    );
}