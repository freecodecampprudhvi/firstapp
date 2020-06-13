import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

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
const StyledButton=styled.button`
  background-color: ${props=> props.alt ? 'red' : 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor:pointer;
  &:hover{
    background-color: ${props=> props.alt ? 'salmon' : 'lightgreen'};
    color :black;  }`;
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
   styled.backgroundColor='red';
   
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
<StyleDiv>

       <h1>HI this is React JS</h1>
        <p className={classes}>Learn and it is funny</p>
 
        <StyledButton  alt={this.state.showPerson} onClick={this.togglePersonHandler}>Toggle person</StyledButton>
       {person}
</StyleDiv>
    );

  }
}

export default App;
