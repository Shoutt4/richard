import '../style/task.css'
import { RiDeleteBack2Line } from "react-icons/ri";

const Task = ({id ,text, complete ,completarTarea ,eliminarTarea } )=>{
    return(
        <div className={complete ? 'content completado' : 'content'}>
            <div 
            className='tarea-texto' 
            onClick={()=>{completarTarea(id)}} >
             {text}
            </div>
            <div className='task-content' onClick={()=>{eliminarTarea(id)}}>
            <RiDeleteBack2Line className='task-icono' />
            </div>
        </div>
    );
}

export default Task ; 