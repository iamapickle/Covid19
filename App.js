import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards.js';
import Charts from './components/Charts/Charts.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import {fetchD} from './Api.js';

class App extends React.Component {
  constructor(){
    super();
    var data={};
    this.state ={
      data: {}
    };
  }


async componentDidMount(){
  const data=await fetchD();
  console.log(data);
  this.setState({data:data});
  this.data=data;
  console.log(this.state);
}

 render(){
     const {data}=this.state;
     return (
          <div className="container">
            <Cards data={this.state.data}/>
            <Charts/>
            <SearchBar/>
          </div>
    );
 }
}

export default App;
