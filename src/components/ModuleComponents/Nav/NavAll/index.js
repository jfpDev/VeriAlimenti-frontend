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
          <Link to="/galery">
            <b><li className="HNstyle">Galería</li></b>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/restaurant">
            <b><li className="HNstyle">Restaurante</li></b>
          </Link>
        </ul>
      </div>
    </nav>
  );
}


export default NavAll;
