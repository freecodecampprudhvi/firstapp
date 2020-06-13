import React, { Component } from 'react';

persons.map((person,index) => {
    return <Person 
    
    
    name={person.name} 
    age={person.age}
    key={person.id}
    changed={(event) => this.nameChangeHandler(event,person.id)}/>
  })
