import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
import authContext from '../context/auth-context';

class App extends Component {
  state=
  {
    persons:[
      {id:1, name: "kaya", age: 23},
      {id:2,name: "katre", age: 24}
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter:0,
    authenticated:false
  }


  //---------Handler functions starts here---------------
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
 }
 componentDidMount(){
  console.log('[App.js] componentDidMount');
  }
  loginHandler =()=>{
    this.setState({authenticated:true});
  }
  nameChangeHandler = (event,id) =>
  {
    const personIndex= this.state.persons.findIndex(p=> {return p.id===id;});
    const tempPerson={...this.state.persons[personIndex]};
    tempPerson.name=event.target.value;
    const spersons=[...this.state.persons];
    spersons[personIndex]=tempPerson;
    this.setState((prevState,props)=>
    {
      return {
        persons: spersons,
        changeCounter:prevState.changeCounter+1
      };
    });
  };

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
  //----------Handler functions ends here----------------

  //----------Rendering starts here----------------
  render() 
  {
    console.log('[App.js] Render');
    let person=null;
    if(this.state.showPerson)
    { 
      person=
      (
      <Persons 
      persons={this.state.persons}
      clicked={this.deletePersonHandler} 
      changed={this.nameChangeHandler}/>
          )    }
    return (
      
     <WithClass classes={classes.App}>
      <button onClick ={()=>{
        this.setState({showCockpit:false});
       } }>remove cockpit</button>
      <authContext.Provider 
      value={
        {authenticated: this.state.authenticated,
        login: this.loginHandler
        }}>
      {this.state.showCockpit ? (  
       <Cockpit 
       showPerson={this.state.showPerson}
      pLength={this.state.persons.length}
      click={this.togglePersonHandler}/>
      ) : null }
      {person}
      </authContext.Provider>
      </WithClass>
    );
  }
}
  //----------Rendering ends here----------------

export default App;
