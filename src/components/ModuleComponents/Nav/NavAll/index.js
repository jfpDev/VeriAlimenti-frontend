import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


function NavAll(){

  const style = {
    background: '#35cb43'
  }

  return(
    <nav style={style}>
      <div className="container">
        <ul className="right hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/galery">
            <b><li className="HNstyle">Galería</li></b>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/restaurant">
            <b><li className="HNstyle">Restaurante</li></b>
          </Link>
        </ul>
        <ul className="right hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/root">
            <b><li className="HNstyle">Root</li></b>
          </Link>
        </ul>
      </div>
    </nav>
  );
}


export default NavAll;
