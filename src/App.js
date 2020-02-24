import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Searchpanel from './components/Searchpanel'
import Beers from './components/Beers';
import Favs from './components/Favs';
import { BrowserRouter, Route } from 'react-router-dom';
import * as axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    input_item: '',
    beers: [],
    favbeers: [],
    star: "far"
    
    }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

}

 handleChange = (event) => {
  this.setState({input_item: event.target.value});
}


handleSubmit = (event) => {
if(this.state.input_item !== ""){
axios.get(this.state.input_item).then(response => {
  this.setState({beers: response.data});

 });
} else alert("Enter the url");
event.preventDefault();
}

 getFavItem = (index) => {
const upd = this.state.beers;
let fav = upd.filter((item) => {return item.id === index});

this.setState({favbeers: Array.from(new Set(this.state.favbeers.concat(fav)))});
debugger
console.log(this.state.favbeers);
}

starClick = () => {
  this.setState({star: "fas"});
}

render(){
   return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar />
        <Searchpanel addItem={this.handleChange} newQuery={this.handleSubmit} input_item={this.state.input_item}/>
        <Route exact path='/' render={() => <Beers beers={this.state.beers} favs={this.getFavItem} star={this.state.star} starClick={this.starClick}/>} />
        <Route path='/favs' render={() => <Favs favourbeers={this.state.favbeers} />}/>
        
        
      </div>
    </BrowserRouter> 
        );
  }
}

export default App;
