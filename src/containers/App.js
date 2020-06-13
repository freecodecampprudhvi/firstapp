import React, { Component } from 'react';
import classes from './App.module.css';
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
console.log(plength);
  const  Aclasses=[];
  if(plength <=1)
  {
        Aclasses.push(classes.Red);
}
if(plength >=2)
{
      Aclasses.push(classes.Green);
}

    return (
<div className={classes.App}>

       <h1>HI this is React JS</h1>
        <p className={Aclasses}>Learn and it is funny</p>
 
        <button  className={btnClass} alt={this.state.showPerson} onClick={this.togglePersonHandler}>Toggle person</button>
       {person}
</div>
    );

  }
}

export default App;
