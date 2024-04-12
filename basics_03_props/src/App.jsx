import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  
  const [count, setCount] = useState(0)

  const myObj = {
    name : "mitchell",
    age : "22"
  }

  const arr = [1,2,3]

  return (
    <>
      <h1 className='text-white text-4xl bg-green-500 rounded-xl mb-4 w-75 h-12'>heading</h1>
      {/* here , whatever we'll pass in the card component will can be accessed through the `props` from `Cards` component */}
      {/* remember to send object as variables in the components */}
      {/* <Cards username="darwin" obj =  {myObj} arr = {arr}/> */}

      {/* this is how same components can be updated dynamically through this processor */}
      {/* <Cards obj = {myObj}/>
      <Cards arr = {arr} /> */}
      <Cards username="darwin" btnText = "click me"/>
      <Cards username="mitchell" btnText = "visit me"/>
    </>
  )
}

export default App
