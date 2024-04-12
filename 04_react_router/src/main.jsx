import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Structure from './Structure'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Structure />} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:userid' element={<User />} />
      <Route 
       loader={githubInfoLoader}
      path='Github' element={<Github />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

//alternative way
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Structure/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"About",
//         element: <About/>
//       },
//      {
//         path:"Contact",
//         element: <Contact/>
//       },

//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
