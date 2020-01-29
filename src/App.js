import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Searchpanel from './components/Searchpanel'
import Beers from './components/Beers';
import * as axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
this.state = {
    input_item: '',
    beers: []
  }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

  
handleChange(event){
 
    this.setState({input_item: event.target.value});
   
  }


handleSubmit(event) {
axios.get(this.state.input_item).then(response => {
 
    this.setState({beers: response.data});
    });
event.preventDefault();
}


  render(){
   return (
    <div className="App">
       <Navbar />
       <Searchpanel addItem={this.handleChange} newQuery={this.handleSubmit} input_item={this.state.input_item} />
       <Beers beers={this.state.beers} />
    </div>
        );
  }
}

export default App;
