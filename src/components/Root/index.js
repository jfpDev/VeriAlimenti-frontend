import React from 'react';
import './styles.css';
import NavRoot  from '../ModuleComponents/Nav/NavRoot/';


function Root(){
  return(
    <div className="RootStyle">
      <NavRoot/>
      <div className="RootMessage">
        <h1><b>Root admin page</b></h1>
      </div>
    </div>
  );
}


export default Root;
