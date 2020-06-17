import React,{useEffect, useRef,useContext} from 'react';
import classes from './Cockpit.module.css';
import authContext from '../../context/auth-context';
const cockpit =(props)=>{
    const toggleBtnRef=useRef(null);
    const AuthContext=useContext(authContext);
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        const timer=
            setTimeout(()=>{
            alert("save");
            }, 1000);
        return () =>{
            clearTimeout(timer);
      console.log('[Cockpit.js] Cleanup work');  
    
    };
    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js] 2useEffect');
    
    return () =>{

        console.log('[Cockpit.js] 2 Cleanup work');  
    };
    },);


    let btnClass='';
    
    
    const Aclasses=[];
    if(props.plength <=1) {Aclasses.push(classes.red);}
    if(props.plength >=2) { Aclasses.push(classes.green );}
    if(props.showPerson)
    {
        btnClass=classes.Red;
    }
    return(
       <div className={classes.Cockpit}>
        <h1>Hi props is React JS</h1>
        <p className={Aclasses}>Learn and it is funny</p>
        <button  
            className={btnClass} 
            ref={toggleBtnRef}
            onClick={props.click}>Toggle person
        </button> 

        {
        <button onClick={AuthContext.login}>Login</button>}
        
        </div>
        );
};

export default React.memo(cockpit);