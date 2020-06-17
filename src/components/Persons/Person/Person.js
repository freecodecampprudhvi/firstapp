import React,{Component} from 'react';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import propTypes from 'prop-types';
import authContext from '../../../context/auth-context';
class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }
    static contextType=authContext;    
    componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate');
     
     }
     componentDidMount(){
        console.log('[Person.js] componentDidMount');
        this.inputElementRef.current.focus();
     }

    render(){
    console.log('[person.js] rendering');
    return (
    <WithClass classes={classes.Person}>
        
             {this.context.authenticated ? <p>Login successful</p> :<p> Please Login</p>
    }

        <p onClick={this.props.click}> i am {this.props.name}  and my age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input 
        type="text" 
        ref={this.inputElementRef}
        onChange={this.props.changed} 
        value={this.props.name}/>
    </WithClass>);
}
}
Person.propTypes={
    click:propTypes.func,
    name:propTypes.string,
    age:propTypes.number,
    changed:propTypes.func
};

export default Person;
