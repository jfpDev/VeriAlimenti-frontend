import React, {Component} from 'react';
import './styles.css';
import HomePic from './home.jpg';
import NavAll  from '../ModuleComponents/Nav/NavAll/';



function Home(){
  return (
    <div >
    <div className="back">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="Hmessage">
      <h2><b> Fresh Market</b></h2>
    </div>
    <div className="Hlmessage">
      <h4><b> Frutas y verduras a precios de galería</b></h4>
    </div>
    </div>
    <NavAll/>
    <div className="Wmessage">
      <h1>Bienvenido a VeriAlimenti</h1>
    </div>
    <br/>
    <div className="BWImessage">
      <h4> <b>Cada vez es más la variedad, calidad y ahorros!</b></h4>
    </div>
    <div className="container">
      <div className="Imessage">
        <h4> <p>Con Veri Alimenti® ya es posible comprar una gran selección de frutas y verduras frescas a precios más favorables que en las plazas de mercado de Cali como Santa Elena y Alameda. </p></h4>
        <h4>Visítanos y vive otra experiencia de compra. Síguenos en nuestras redes sociales y suscríbete para que mantengas al tanto de todo lo relacionado con frutas y verduras frescas. </h4>
      </div>
    </div>
    <br/>
    <br/>
    </div>
  );
}

export default Home;
