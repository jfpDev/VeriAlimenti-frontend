// Import Modules
import React, {Component} from 'react';
import NavAll  from '../ModuleComponents/Nav/NavAll/';

// Galery Images
import Aguacate from './../ModuleComponents/Images/aguacatepapelillo.png';
import PapaParda from './../ModuleComponents/Images/papapardacaucana.png';
import CebollaCabezona from './../ModuleComponents/Images/cebollacabezonamorada.png';
import Coliflor from './../ModuleComponents/Images/coliflor.png';
import Zapallo from './../ModuleComponents/Images/zapallo.png';
import PlatanoVerde from './../ModuleComponents/Images/platanoverdeharton.png';


class Galery extends Component{

  constructor(){
    super();
    this.state = {
      articlesView: [],
    };
    //this.addPurchase = this.addPurchase.bind(this);
  }

componentDidMount(){
  this.fetchArticles();
}

fetchArticles(){
  fetch('http://localhost:8080/db/articles',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data =>{
      this.setState({articlesView: data});
    })
}

  render(){
  return(
    <div className="GaleryStyle" >
      <NavAll/>
      <div className="container">
        <h3>Galería de artículos</h3>
        <div className="row card">
        {
          this.state.articlesView.map(article => {
            return(
              <div class="col s12 m6 14">
                <h4>{article.name}</h4>
                <h6>{`$/Kg ${(article.kprice*0.2)+article.kprice}`}</h6>
                <img src={Aguacate} class="responsive-img card materialbox" />
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
 }
}

export default Galery;

{ /*
()=> {
  if (article.name == 'papa'){
    return('PapaParda')
  }
  if (article.name == 'aguacate'){
    return('Aguacate')
  }
  else
    return('Zapallo')
}
*/}
