import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default function Navbar () {
  return (
    <div className="container ">

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    
   <div className="navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item ">
       <h2> <Link className="nav-link active" aria-current="page" to='/Mounting' >Mounting</Link> </h2>
        </li>
        <li className="nav-item">
        <h2> <Link className="nav-link active" aria-current="page" to='/Updating' >Updating</Link></h2>
        </li>
        <li className="nav-item">
       <h2> <Link className="nav-link active" aria-current="page" to='/Unmounting' >Unmounting</Link></h2>
        </li>
    </ul>
    

    </div>
  </div>
</nav>

      

    </div>
    
  )
}
