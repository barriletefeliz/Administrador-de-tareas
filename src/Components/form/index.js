import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'

const Form = ({createTarea}) => {

    // State de tareas
    const [tarea, updateC] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '', 
        description: ''
    });

    const [error, updateError] = useState(false)

    const handleChange = e => {
        updateC({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, description} = tarea;

    const submitTarea = e => {
        e.preventDefault();
        // validacion
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || description.trim() === ''){
            updateError(true); 
            return;
        } 
        //eliminar mensaje de error
        updateError(false); 


        //asignando ID
        tarea.id = uuid();

        //creando tarea
        createTarea(tarea);

        //reiniciando form
        updateC({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '', 
            description: ''
        })
    }

  return ( 
      <Fragment>
          <h2>Crear tarea</h2>
          {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

          <form onSubmit={submitTarea}>
              <label>Tarea</label>
              <input
              type="text"
              name="mascota"
              className="u-full-width"
              placeholder="nombre mascota"
              onChange={handleChange}
              value={mascota}
              />

          <label>Name</label>
              <input
              type="text"
              name="propietario"
              className="u-full-width"
              placeholder="nombre dueño"
              onChange={handleChange}
              value={propietario}
              />

          <label>Fecha</label>
              <input
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={handleChange}
              value={fecha}
              />

          <label>Hora</label>
              <input
              type="time"
              name="hora"
              className="u-full-width"
              onChange={handleChange}
              value={hora}
              />

          <label>Description</label>
              <textarea 
                className="u-full-width"
                name="description"
                onChange={handleChange}
                value={description}>
              </textarea>

              <button
              type="submit"
              className="u-full-width button-primary">
                  Agregar
              </button>
          </form>
          
      </Fragment>
  );
}

export default Form;