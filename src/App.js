import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
      
    this.state = {
      mosters: [],
      searchField: ''
    };

   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({mosters: users}));
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value }, () =>
    console.log(this.state)
    );
  }

  render(){
    const { mosters, searchField } = this.state;
    const filteredMonsters = mosters.filter( moster =>
      moster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
    <div className="App">
      <h1>Monsters</h1>
      <SearchBox 
        placeholder='search'
        handleChange ={ this.handleChange}
      />
      <CardList mosters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;
