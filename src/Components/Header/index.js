import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import './Style.scss'

const Header = ({ title }) => {
    return (
        <nav className="navbar navbar-light">
          <a class="navbar-brand" href="#"><h2 className="header-title"> {title} </h2></a>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={ faFacebookF } /></a>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={ faTwitter } /></a>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={ faInstagram } /></a>
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={ faPhoneAlt } /></a>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </nav>
    );

}

export default Header