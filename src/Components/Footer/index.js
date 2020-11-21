import React from 'react';
import Icon from '../Icon'
import './Styles.css'

const Footer = () => {

  return (
    <div>
      <Icon />
      <div className="container">
        <div className="row">
          <div className="one-half">
            <h1 className="author">Lucas Martinez FrontEnd Dev</h1>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;