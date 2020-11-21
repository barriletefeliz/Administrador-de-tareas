import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4'
import './Styles.css'

const Form = ({createTask}) => {

    //State local de tareas
    const [taskState, updateState] = useState({
        task: '',
        objective: '',
        date: '',
        description: ''
    });

    const [error, updateError] = useState(false);

    const handleChange = e => {
        updateState({
            ...taskState,
            [e.target.name] : e.target.value
        })
    }

    //extracción de valores
    const {task, objective, date, description} = taskState;

    //agregar cita
    const onSubmit = e => {
        e.preventDefault();
        //validación
        if(task.trim() === '' || objective.trim() === '' || date.trim() === '' || description.trim() === '' ){
            updateError(true);
            return
        } updateError(false)
        //asignación de id
        taskState.id = uuid();
        //creación de cita
        createTask(taskState);
        //reinicio del form
        updateState({
            task: '',
            objective: '',
            date: '',
            description: ''
        });

    }

  return ( 
      <Fragment>
          <h2 className="create-task">Ingresá una tarea</h2>
          {error ? <p className="alert-error">Todos los campos son obligatorios </p>: null}
          <form 
            onSubmit={onSubmit}
          
          >
              <label>Tarea</label>
              <input
                type="text"
                name="task"
                className="u-full-width"
                placeholder="Ingresa tu tarea"
                onChange={handleChange}
                value={task}
              />

          <label>Objetivo</label>
              <input
                type="text"
                name="objective"
                className="u-full-width"
                placeholder="¿Cual es tu objetivo?"
                onChange={handleChange}
                value={objective}
              />



          <label>Fecha límite</label>
              <input
                type="date"
                name="date"
                className="u-full-width"
                onChange={handleChange}
                value={date}
              />

          <label>Comentarios</label>
              <textarea 
                className="u-full-width"
                name="description"
                onChange={handleChange}
                value={description}>
              </textarea>

              <button
                type="submit"
                className="u-full-width color-btn">
                Agregar
              </button>
          </form>
          
      </Fragment>
  );
}

export default Form;