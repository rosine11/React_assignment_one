
import React, { useEffect ,useState,useContext} from "react"
import Social from "./component/Social";
import { createContext } from "react";
import Example from "./Example";
export const Contexts = createContext()
import './app.css'
function Myproject() {
  const [Name]=useState("NIYIGENA jeannette")
  const [number, setNumber] = useState(0)

  return (
  
    <>
    <fieldset>
    <center>
      <h1><u>WELCOME</u></h1>
      <button onClick={() => setNumber(number + 1)}>Improve</button>
      <p>the number are:{number}</p>
      <button onClick={() => setNumber(number - 1)}>Reduce</button>
      <Contexts.Provider value={Name}>
      <Social/>
      <Example />
      </Contexts.Provider>
    
    </center>
    </fieldset>
    </>
    
  )
}

export default Myproject;



 

