import React, {Component} from 'react';
import NavRoot from '../../ModuleComponents/Nav/NavRoot/';
//import './styles.css'

{/*const articlesView = {
  name: '',
  kprice: '',
  amount: '',
  tprice: '',
};
*/}
class Purchases extends Component{

  constructor(){
    super();
    this.state = {
      name: '',
      kprice: '',
      amount: '',
      tprice: '',
      articlesView: [],
    };
    this.addPurchase = this.addPurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.fetchArticles = this.fetchArticles.bind(this);
    // me sale eror cuando llamo todayPurchases()
    //this.todayPurchases = this.todayPurchases.bind(this);
  }

  todayPurchases(e){
    e.preventDefault();
    this.articlesView = this.state;
    this.addPurchase();
    //document.getElementById('totalPrice').innerText =
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
      console.log(this.state.articlesView);
    })
}


addPurchase(e){
  e.preventDefault();
  this.state.tprice = this.state.kprice * this.state.amount;
  fetch('http://localhost:8080/db/articles',{
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  //M.toast({html: 'Article saved'});
  //console.log(this.state);
  this.setState({
    name: '',
    kprice: '',
    amount: '',
    tprice: '',
  })
  //this.fetchArticles();
  //this.todayPurchases();
}

handleChange(e){
  //console.log(e.target.value);
  const {name, value} = e.target;
  this.setState({
    [name]: value
  })
}

render(){
  return(
    <div>
    <NavRoot/>
    <div className="container">
      <h3>Estas son las compras de hoy</h3>
      <div className="col s5">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.addPurchase} >
              <div onChange={this.handleChange} className="input-field col s5">
                <input name="name" type="text" placeholder="Article" value={this.state.name}/>
              </div>
              <div onChange={this.handleChange} className="input-field col s1">
                <input name="kprice" type="number" placeholder="$/kg" value={this.state.kprice}/>
              </div>
              <div onChange={this.handleChange} className="input-field col s1">
                <input name="amount" type="number" placeholder="Amount" value={this.state.amount}/>
              </div>
              <button type="submit" className="btn-floating btn-medium waves-effect waves-light darken-blue"><i class="material-icons">add</i></button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>$ Price/Kg</th>
              <th>Amount</th>
              <th>$ Total</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.articlesView.map(article => {
              return(
                <tr key={article.key}>
                  <td>{article.name}</td>
                  <td>{article.kprice}</td>
                  <td>{article.amount}</td>
                  <td>{article.tprice}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
    </div>

  );
 }
}


export default Purchases;

//oninput="totalp.value=parseInt(kprice.value)*parseInt(amount.value)
