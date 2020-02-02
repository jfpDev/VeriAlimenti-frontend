import React from 'react';
import {Link} from 'react-router-dom';

import VA_logo from './VA_logo.svg';
import './styles.css';

function Header(){


  return(
    <div className="HeaderStyle">
      <div className="container">
        <a href="/">
          <img src={VA_logo} className="responsive-img App-logo"  alt="logo" />
        </a>
      </div>
    </div>





  );
}


export default Header;
