import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from'radium';

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
const style={
  backgroundColor:'green',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor:'pointer',
  ':hover':{
    backgroundColor: 'lightgreen',
    color :'black' 

  } 
};
    let person=null;

    if(this.state.showPerson){
      person=(

    <div>  
        {this.state.persons.map((person,index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.nameChangeHandler(event,person.id)}/>
      })}
      
   </div>
   );
   style.backgroundColor='red';
   style[':hover']={
    backgroundColor: 'salmon',
    color :'black' 
  } 
    }
   let plength=this.state.persons.length;

  const  classes=[];
  if(plength <=1)
  {
        classes.push('red');
}
if(plength >=2)
{
      classes.push('green');
}

    return (
      <StyleRoot>
      <div className="App">
       <h1>HI this is React JS</h1>
        <p className={classes}>Learn and it is funny</p>
 
        <button style={style} onClick={this.togglePersonHandler}>Toggle person</button>
       {person}
      </div>
      </StyleRoot>
    );

  }
}

export default Radium(App);
