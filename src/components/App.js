
import React,{useEffect, useState} from "react";
import './../styles/App.css';


const App = () => {

  const[value,setValue]=useState("");

  function updateValue(e){
    setValue(e.target.value)
  }

  useEffect(()=>{
    console.log(`value changed: ${value}`);
  })

  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={updateValue}/>
    </div>
  )
}

export default App
