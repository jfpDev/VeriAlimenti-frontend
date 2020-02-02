import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


function NavRoot(){

  return(
    <nav className="RVstyle">
      <div className="container">
        <ul className="left hide-on-med-and-down">
          <Link to="/root/purchases">
            <li className="RVstyle">Purchases</li>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/root">
            <li className="RVstyle">Root</li>
          </Link>
        </ul>
        <ul className="left hide-on-med-and-down">
          <Link to="/root/sales">
            <li className="RVstyle">Sales</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}


export default NavRoot;
