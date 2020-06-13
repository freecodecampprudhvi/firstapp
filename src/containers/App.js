import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
class App extends Component {
  state=
  {
    persons:[
      {id:1, name: "kaya", age: 23},
      {id:2,name: "katre", age: 24}
    ],
    showPerson: false
  }

  nameChangeHandler = (event,id) =>
  {
    const personIndex= this.state.persons.findIndex(p=> {return p.id===id;});
    const tempPerson={...this.state.persons[personIndex]};
    tempPerson.name=event.target.value;
    const spersons=[...this.state.persons];
    spersons[personIndex]=tempPerson;
    this.setState({persons: spersons});
  }

  deletePersonHandler = (personIndex) =>
  {
    const tempPerson=[...this.state.persons];
    tempPerson.splice(personIndex,1);
    this.setState({persons: tempPerson})
  }

  togglePersonHandler= () =>
  {
    console.log("inside toggle Handler");
    const doShow= this.state.showPerson;
    this.setState({showPerson: !doShow });
  }
  
  render() 
  {
    let person=null;
    if(this.state.showPerson)
    { 
      person=
      (<div>
      <Persons 
      persons={this.state.persons}
      clicked={this.deletePersonHandler} 
      changed={this.nameChangeHandler}/>
      </div>);
    }
    return (
     <div className={classes.App}>
      <Cockpit state={this.state}
      click={this.togglePersonHandler}/>
      {person}
    </div>
    );
  }
}

export default App;
