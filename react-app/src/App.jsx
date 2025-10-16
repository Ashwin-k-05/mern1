import React from 'react'
import User from "./components/User"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import About from "./Pages/About"
import {Route,Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" Component={Home}> </Route>
    <Route path="/about" Component={About}> </Route>
    <Route path="/contact" Component={Contact}> </Route>
     <Route path="/service" Component={Service}> </Route>
    </Routes>
    </>
  )
}

export default App