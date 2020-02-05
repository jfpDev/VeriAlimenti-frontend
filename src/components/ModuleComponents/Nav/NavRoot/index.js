import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


function NavRoot(){

  return(
    <nav className="RVstyle">
      <div className="container">
        <ul className="left hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/root">
            <b><li className="RVstyle">Root</li></b>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/root/purchases">
            <b><li className="RVstyle">Purchases</li></b>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/VeriAlimenti-frontend/root/sales">
            <b><li className="RVstyle">Sales</li></b>
          </Link>
        </ul>
      </div>
    </nav>
  );
}


export default NavRoot;
