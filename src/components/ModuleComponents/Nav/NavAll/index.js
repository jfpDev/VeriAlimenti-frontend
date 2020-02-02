import React from 'react';
import {Link} from 'react-router-dom';


function NavAll(){

  const style = {
    background: '#35cb43'
  }

  return(
    <nav style={style}>
      <div className="container">
        <ul className="right hide-on-med-and-down">
          <Link to="https://jfpdev.github.io/VeriAlimenti-frontend/galery">
            <li>Galería</li>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="https://jfpdev.github.io/VeriAlimenti-frontend/restaurant">
            <li>Restaurante</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}


export default NavAll;
