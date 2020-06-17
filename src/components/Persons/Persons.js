import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
 }
/*shouldComponentUpdate(nextProps,nextState){
  console.log('[Persons.js] shouldComponentUpdate');
if (nextProps.persons!==this.props.persons||
  this.props.clicked!==nextProps.clicked||
  this.props.changed!==nextProps.changed)
return true;
  return false;
}
*/
  render(){ 
    return this.props.persons.map((person,index) =>{
  return <Person 
    click={()=> this.props.clicked(index)}
    name={person.name} 
    age={person.age}
    key={person.id}
    changed={( event ) => this.props.changed(event,person.id)}/>
  }
);
}
}

export default Persons;