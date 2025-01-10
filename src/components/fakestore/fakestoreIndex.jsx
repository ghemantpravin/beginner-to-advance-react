import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import FakestoreList from './fakestoreList'
import FakestoreProducts from './fakestoreProducts'
import FakestoreDetails from './fakestoreDetails'
import FakestoreLogin from './fakestoreLogin'

function FakestoreIndex() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<FakestoreList></FakestoreList>}></Route>
                        <Route path='products/:category' element={<FakestoreProducts></FakestoreProducts>}>
                            <Route path='details/:id' element={<FakestoreDetails></FakestoreDetails>}></Route>
                        </Route>
                        <Route path='login' element={<FakestoreLogin></FakestoreLogin>}></Route>
                        <Route path='*' element={<h1>Not Found</h1>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </div>
  )
}

export default FakestoreIndex
