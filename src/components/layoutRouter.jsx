import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router' 
import Emi from './emi/emi'
import Details from './details/details'

function LayoutRouter() {
  return (
    <div className='container'> 
        <div className="row">
            <div className="col-md-12">
               <BrowserRouter>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link to="/" className="nav-link">Home</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to="men" className="nav-link">Men</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to="women" className="nav-link">Women</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to="kids" className="nav-link">Kids</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to="emi" className="nav-link">Emi</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


                   <section>
                        <Routes>
                            <Route path='/' element={<div><h3>Online Shopping</h3></div>}></Route>
                            <Route path='men' element={<div><h3>Men</h3></div>}></Route>
                            <Route path='women' element={<div><h3>women</h3></div>}></Route>
                            <Route path='kids' element={<div><h3>Kids</h3></div>}></Route>
                            <Route path='men' element={<div><h3>Men</h3></div>}></Route>
                            <Route path='emi' element={<div><Emi></Emi></div>}></Route>
                            <Route path='details/:id/:name/:price' element={<div><Details></Details></div>}></Route>
                            <Route path='*' element={<div><h3>Not Found</h3></div>}></Route>
                        </Routes>
                    </section> 



               </BrowserRouter> 
            </div>
        </div>
    </div>
  )
}

export default LayoutRouter
