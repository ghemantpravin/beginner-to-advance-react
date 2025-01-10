import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'

function FakestoreDetails() {

    let params = useParams()

    const [products, setProducts] = useState(
        [
            {
                id : 0,
                title : '',
                image : '',
                price : 0,
                description : '',
                category : ''
            }
        ]
    )
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response => {
            setProducts(response.data)
        })
    }, [params.id]);

  return (
    <div className='container'>
        <div className="row">
            <h1>Details</h1>
            <div className="col-md-4">
                <div className="card">
                    <img src={products.image} style={{width: 250, margin:"auto", display : 'table'}}></img>
                    <p className='card-text'>{products.title}</p>
                    <p className='card-text'>{products.price}</p>
                    <p className='card-text'>{products.description}</p>
                </div>    
            </div>

            <Link to="/"><button className='btn btn-danger'>BACK TO HOME</button></Link>
        </div>
    </div>
  )
}

export default FakestoreDetails
