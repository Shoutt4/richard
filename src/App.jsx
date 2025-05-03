import { useState } from 'react'
import Task from './components/Task.jsx'
import Freecode from './img/freecodecamp-logo.png' ;
import './style/principal.css' ; 
import FormTask from './components/FormTask.jsx';
import Contenedor from './components/Contenedor.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <div className='aplicacion-tareas'>
      <div className='fre-code-logo'>
        <img 
        src={Freecode} 
        className='free-logo' 
        alt=""  
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>mis tareas</h1>
        <Contenedor />
      </div>
     </div>
    </>
  )
}

export default App
