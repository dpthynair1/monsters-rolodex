import React, { Component } from 'react';

import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      Monster: [],
      searchField: ''
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({Monster: users}))
  }
  render() {

    const { Monster, searchField} =  this.state;
    const filteredMonsters = Monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1> Monsters Rolodex</h1>
  <SearchBox
  placeholder = 'search monsters'
  handlechange = {e => this.setState ({searchField: e.target.value})}
  />

  
   
      <CardList Monster = {filteredMonsters}/> 
     
      
     
      
    </div>
  );
  }
}

export default App;
