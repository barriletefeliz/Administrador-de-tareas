import React from 'react';
import Reactlogo from '../../Assets/logo.svg'
import './Styles.css'


function Icon() {

  return (
    <div className="logo-container">
      <img src={Reactlogo} className="react-logo" alt="logo-react" /> 
    </div>
  );
}


export default Icon;
