import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router'
import axios from 'axios';

function FakestoreProducts() {

    let params = useParams();

    const[products, setProducts] = useState(
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

        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response => {
            setProducts(response.data)
        })

    }, []);

  return (
    <div className='container'>
        <div className="row">
                <h1>FakeStore Products</h1>
                <div className='col-md-4'>
                    {
                        products.map(product=>
                            <div className='card'>
                                <p className='card-text'>{product.title}</p>
                                <Link to={`details/${product.id}`} className='btn btn-warning'>Details</Link>
                            </div>
                        )
                    }

                <Link to="/"><button className='btn btn-danger'>BACK TO HOME</button></Link>

                </div>

                <div className="col-md-8">
                    <Outlet></Outlet>
                </div>

                
            
        </div>
    </div>
  )
}

export default FakestoreProducts
