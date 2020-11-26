import React from 'react';
import './Style.scss';

const Result = ({ quotation }) => {

  return (

      (quotation === 0) 
        ? <div className="alert alert-primary text-center quotation-wrapper" role="alert">
        Ingresa tu marca, modelo y seleccioná tu plan
      </div>
        : (
            <div className="text-center quotation-wrapper">
                        <div className="jumbotron">
                            <h1 className="display-4">Precio final </h1>
                            <p className="lead">$ { quotation } </p>
                            <hr className="my-4"></hr>
                            <p> Contrata tu Seguro Automotriz Online y despreocúpate. <br></br>
                            Contá con nuestro respaldo y experiencia. </p>
                        </div>
            </div> 
        )
  );
}

export default Result;