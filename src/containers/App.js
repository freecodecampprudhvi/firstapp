import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
const StyleDiv=
  styled.div`
  margin:16px auto;
  
  width:60%;
  border:3px solid #272321;
  box-shadow: 0 3px 15px #272321;
  padding: 16px;
  text-align: center;
  height:450px;
  @media (min-width:500px){
  width:'450px';
  }
  `;

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
const personIndex= this.state.persons.findIndex(p=>
  {
    return p.id===id;
  });
const tempPerson={...this.state.persons[personIndex]};
   tempPerson.name=event.target.value;
   const spersons=[...this.state.persons];
   spersons[personIndex]=tempPerson;
   this.setState({persons : spersons});
}

  deletePersonHandler = (personIndex) =>
  {
  const tempPerson=[...this.state.persons];
  tempPerson.splice(personIndex,1);
  this.setState({persons: tempPerson})
  }

  togglePersonHandler= () =>
  {
    const doShow= this.state.showPerson;
this.setState(
 {showPerson: !doShow }
);
  }
  
  render() {
let btnClass='';


    let person=null;

    if(this.state.showPerson){
      person=(

    <div>  
        <Persons/>
      
   </div>
   );
   btnClass=classes.Red;
   
    }
   let plength=this.state.persons.length;

  const  Aclasses=[];
  if(plength <=1)
  {
        Aclasses.push(classes.App.red);
}
if(plength >=2)
{
      Aclasses.push(classes.App.green);
}

    return (
<div className={classes.App}>

       <h1>HI this is React JS</h1>
        <p className={Aclasses}>Learn and it is funny</p>
 
        <button  class={btnClass} alt={this.state.showPerson} onClick={this.togglePersonHandler}>Toggle person</button>
       {person}
</div>
    );

  }
}

export default App;
