import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode , setThemeMode] = useState('light')

  //we've just set this functions in the createContext's object without doing
  //any functionality within them. But , here we're defining the functionality
  //of the functions which will be linked directly with these functions but one 
  //thing to remember is that functions name should be same
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
 
  //actual change in theme

  useEffect( () => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (

     <ThemeProvider value={{themeMode, darkTheme ,lightTheme}}>

       <div className="flex flex-wrap min-h-screen items-center bg-black">
          <div className="w-full">

                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn />
                 </div>

                 <div className="w-full max-w-sm mx-auto">
                        <Card />
                 </div>

           </div>          
        </div>

     </ThemeProvider>
       
  )
}

export default App
