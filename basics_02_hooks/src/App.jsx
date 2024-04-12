import { useState } from 'react'

import './App.css'

function App() {

  const [counter , setCounter] = useState(5)

  function addValue(){
      if(counter < 100){
        setCounter(counter+1);
      }    
  }

  function removeValue(){
     if(counter > 0){
      setCounter(counter-1);
     }     
  }

  return (
    <>

        <h1>Learning react-hooks</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
