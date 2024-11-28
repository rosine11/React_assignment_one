
import React,{useEffect,useState} from "react";
import { Contexts } from "../App";
import {useContext} from "react"
var Social = ()=>{
  const number = useContext(Contexts)

    var [count,setCount]= useState(0)
    var HandleChange =()=>{
        setCount(count + 1)
       
        
      }
      useEffect(()=>{
        document.title =`${count} `
      },)
      return (
        <div>
            <h1>increase is:{count}</h1>
            
            <button onClick={HandleChange}>Improve</button>
            
            <h2>My name:{number}</h2>
            
    
        </div>
      )
    
}
export default Social