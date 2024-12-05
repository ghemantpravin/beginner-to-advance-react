import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchProduct() {

    const [products, setProducts] = useState([])

    function LoadData()
    {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((products) => {setProducts(products)})
    }

    useEffect(() => {
        LoadData()
    }, []);

  return (
    <div className='container'>
        <h1>FetchProdcuct</h1>

        <div className="row">
                {
                products.map((product)=> {
                        return(
                    <div className="col-md-4" key={product}>
                        <div className="card">
                            <img src={product.image} style={{height : 200, width : 200, margin: 'auto'}}></img>
                            <div className="card-body">
                                <h5 className='card-title'>{product.id}</h5>
                                <p className='card-text'>{product.title}</p>
                                <p className='card-text'>{product.price}</p>
                                <p className='card-text'>{product.description}</p>
                                <p className='card-text'>{product.category}</p>
                            </div>
                        </div>
                    </div>
                            )
                    })
                }
                </div>  

    </div>
  )
}

export default FetchProduct