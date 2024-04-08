import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from './components/Sidebar/Sidebar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App
