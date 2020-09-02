import React from 'react';
import PropTypes from 'prop-types'


const Tareas = ({tarea, removeTarea}) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{tarea.mascota}</span></p>
            <p>propietario: <span>{tarea.propietario}</span></p>
            <p>fecha: <span>{tarea.fecha}</span></p>
            <p>hora: <span>{tarea.hora}</span></p>
            <p>description: <span>{tarea.description}</span></p>

            <button className="button eliminar u-full-width"
            onClick={ () => removeTarea(tarea.id) }>
                Eliminar &times
            </button>
        </div>
     );
}

Tareas.propTypes = {
    tarea: PropTypes.object.isRequired,
    removeTarea: PropTypes.func.isRequired
  
  }

export default Tareas;