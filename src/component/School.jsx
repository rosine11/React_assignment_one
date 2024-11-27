
import React,{useEffect,useState} from "react";
import { Contexts } from "../App";
import {useContext} from "react"
var School = ()=>{
  const number = useContext(Contexts)

    var [count,setCount]= useState(0)
    var HandleChange =()=>{
        setCount(count + 1)
       
        
      }
      useEffect(()=>{
        document.title = `the header is ${count} `
      },)
      return (
        <div>
            <h1>increase is:{count} as header</h1>
            
            <button onClick={HandleChange}>Increasing</button>
            
            <h2>My favorite subject is:{number}</h2>
            
    
        </div>
      )
    
}
export default School