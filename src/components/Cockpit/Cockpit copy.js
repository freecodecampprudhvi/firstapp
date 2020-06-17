import React from 'react';
import classes from './Cockpit.module.css';

const cockpit =(props)=>{
    let btnClass='';
    
    let plength=props.state.persons.length;
    const Aclasses=[];
    if(plength <=1) {Aclasses.push(classes.red);}
    if(plength >=2) { Aclasses.push(classes.green );}
    if(props.state.showPerson)
    {
        btnClass=classes.Red;
    }
    return(
       <div className={classes.Cockpit}>
        <h1>Hi props is React JS</h1>
        <p className={Aclasses}>Learn and it is funny</p>
        <button  
            className={btnClass} 

            onClick={props.click}>Toggle person
        </button> 
        </div>
        );
};

export default cockpit;