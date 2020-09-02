import React, { Fragment, useState, useEffect } from 'react';
import Form from './Components/form'
import Tareas from './Components/Tareas'
import PropTypes from 'prop-types'


function App() {

  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales) {
    tareasIniciales = [];
  }

  //arreglo de tareas
  const [tareas, updateC] = useState(tareasIniciales);

  //use Effect
  useEffect( () => {
    if(tareasIniciales) {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    } else {
      localStorage.setItem('tareas', JSON.stringify([]));
    }

  }, [tareas, tareasIniciales] );

  const createTarea = tarea => {
    updateC([
      ...tareas,
      tarea
    ]);
  }

  //elimina tarea por su id
  const removeTarea = id => {
    const newTareas = tareas.filter(tarea => tarea.id !== id);
    updateC(newTareas);
  }

  const title = tareas.length === 0 ? "no tienes tareas" : "administra tus taras";

  //mensaje tareas vacias



  return (
    <Fragment>
      <h1>Administrador de tareas</h1>
       <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form createTarea={createTarea}/>

            </div>
            <div className="one-half column">
              <h2>{title}</h2>
              {tareas.map(tarea => (
                <Tareas 
                key={tarea.id}
                tarea={tarea}
                removeTarea={removeTarea}
                />
              ))}
            </div>
          </div>

      </div>

    </Fragment>
  );
}

Form.propTypes = {
  createTarea: PropTypes.func.isRequired
}



export default App;
