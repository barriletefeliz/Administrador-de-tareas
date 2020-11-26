import React from 'react';
import './Style.scss';

const Summary = ({ data }) => {

    const { brand, year, plan } = data;
    if ( brand === '' || year === '' || plan === '' ) return null;
    
  return (
      <div className="summary-wrapper">
        <ul class="list-group">
          <li class="list-group-item">Marca: { brand } </li>
          <li class="list-group-item">Año: { year }</li>
          <li class="list-group-item">plan: { plan }</li>
        </ul>
      </div>
  );
}

export default Summary;
