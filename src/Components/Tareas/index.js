import React from 'react';
import PropTypes from 'prop-types'
import './Styles.css'


const Tareas = ({task, deleteTask}) => {
    return (
        <div className="task">
            <p>Tarea: <span>{task.task}</span></p>
            <p>Objetivo: <span>{task.objective}</span></p>
            <p>Fecha: <span>{task.date}</span></p>
            <p>Comentarios: <span>{task.description}</span></p>
            <button 
                className="button eliminar u-full-width"
                onClick={ () => deleteTask(task.id)}>
                Eliminar
            </button>
        </div>
     );
}

Tareas.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired
}

export default Tareas;