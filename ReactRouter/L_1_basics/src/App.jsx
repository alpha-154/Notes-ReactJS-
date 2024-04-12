import { NavLink,Link, Route, Routes, useRoutes } from 'react-router-dom'
import { Home }  from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './BookRoutes'
import './styles.css'

function App() {
   
  //using routes through `useRoutes()` hook
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home/>
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound/>
  //   }
  // ])

  //first we've to install react router to your application using 
  //this command : npm i react-router-dom
  //then wrap the all other components within the context it provides in 
  //the 'main.jsx' file
  
  return (

    <>
     {/* here, we're creating this nav section to route between different component dynamically */}
       <nav>

         <ul>

           <li>
               {/* here, 'Link' element is equavalent to anchor tag */}
               {/*  essentially 'Link' element can have more attribute like 'replace' , 'reloadDocument','state' */}
               {/* 'NavLink' element does the tasks like the 'Link' element but it has more properties like 'style' , 'className', 'children' */}
               {/* and the especiality about these class that these class can take a function which has a 'isActive' property */}
                <NavLink 
                  //to change the color of the active route
                  // style = {({isActive})=>{
                  //   return isActive ? {color:'red'} : {}
                  // }}
                  //the easiest way of doing it to create a 'css' file and set a class '.active' to desired color
                 to='/'>
                   Home
                </NavLink>
           </li>
           <li>
                <NavLink to='/books'>Books</NavLink>
           </li>
           

         </ul>

       </nav>

        {/* when, nav elements changes the components which are placed in the routes section will change and the nav section elements will remain same */}
        {/* Route needs to things : 1-path(the actual url of the page) , 2-the component to direct(jsx file) */}
        {/* here, by setting path to '/' we're indicating that this component is the root componet of the application */}
        {/* element used for to indicate which component to render */}

        {/* {element} */}

        <Routes>

           <Route path='/' element = { <Home/> } />

          {/* we can also separate the routes of a component to another file & atlast injecting here just the file instead of different routes */}
          {/* basically here, we're separating the nesting portion of the code to another file named 'BookRoutes.jsx' */}
          <Route path='/books/*' element={<BookRoutes/>} />

          {/* nesting the route which index path is 'BookList' component */}
           {/* <Route path='/books' element = {<BookLayout/>} > 
             <Route index element={<BookList/> } />
             <Route path=':id' element = { <Book/> } />
             <Route path='new' element = { <NewBook/> } /> 
           </Route> */}

          {/* <Route path='/books' element = { <BookList/> } />
          <Route path='/books/:id' element = { <Book/> } />
          <Route path='/books/new' element = { <NewBook/> } />       */}

         
           {/* path='*' handles when an user enter an invalid url then which page to redirect the user  */}
          <Route path='*' element = { <NotFound/> } />      

        </Routes>


        
    </>
     
  )
}

export default App
