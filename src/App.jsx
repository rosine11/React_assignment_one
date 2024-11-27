
import React, { useEffect ,useState,useContext} from "react"
import School from "./component/School";
import { createContext } from "react";
import Explain from "./Explain";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
export const Contexts = createContext()
import './app.css'
function Mystate() {
  const [Name,setName]=useState("React javascript")
  const [number, setNumber] = useState(0)

  return (
    <fieldset>
    <Router>
      <a href="/explai"><button>CLICK HERE IF YOU WANT EXAMPLE OF REACT HOOKS</button></a><br /><br />
      
    <>
    <Routes>
      <Route path="/explain" element={<Explain />}/>
      
    </Routes>
    <center>
      <h1>WELCOME TO MY PROJECT</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <p>the number confirmed are:{number}</p>
      <button onClick={() => setNumber(number - 1)}>Decrease</button>
      <Contexts.Provider value={Name}>
      <School/>
      <Explain />
      </Contexts.Provider>
    
    </center>
    </>
    </Router>
    </fieldset>
  )
}

export default Mystate;



 

