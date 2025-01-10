import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router' 

function FakestoreList() {

    const [catgories, setCatgories] = useState([])

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
            setCatgories(response.data)
        })
    }, []);

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                    <h1>FakeStore Home</h1>

                <div className="row">
                    <div className="col-md-4">
                        <ul className='list-unstyled'>
                            {   
                                catgories.map(category=> <Link to={`/products/${category}`}><li key={category}>{category.toUpperCase()}</li></Link>)
                            }
                            <li className='btn btn-warning'>
                                <Link to="/login">User Login</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FakestoreList


