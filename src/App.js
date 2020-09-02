import React, { Fragment, useState } from 'react';
import Form from './Components/form'
import Tareas from './Components/Tareas'
import Footer from './Components/Footer'
import PropTypes from 'prop-types'


function App() {
  //arreglo de tareas
  const[tasks, saveTasks] = useState([

  ]);

  //agrega tasks a las actuales
  const createTask = task => {
    saveTasks([
      ...tasks,
      task
    ]);
  }

  //elimina task por su id
  const deleteTask = id => {
    const newTasks = tasks.filter( task => task.id !== id);
    saveTasks(newTasks)
  }

  //Mensajito condicional 
  const title = tasks.length === 0 ? 'Aún no agregaste tareas' : 'Administra tus tareas'

  return (
    <Fragment>
      <h1>Anotador de Tareas</h1>
       <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form
                createTask={createTask}
              />
            </div>
            <div className="one-half column">
              <h2 className="task-container">{title}</h2>
              {tasks.map(task => (
                <Tareas 
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
          </div>
      </div>
      <Footer />
    </Fragment>
  );
}

Form.propTypes = {
  createTask: PropTypes.func.isRequired
}



export default App;
