import React, { useEffect, useState } from 'react'

function Fetch() {

    const [product, setProduct] = useState({
        title : '',
        price : 0,
        ratings : {
            rate : 0,
            reviews : 0,
            rating : 0
        },
        offers : [

        ],
        image : ''
    })

   

    function LoadData(){

        fetch('product.json')
        .then ((response) => response.json())
        .then((product) => setProduct(product)
        )
    }


    useEffect(() => {
        LoadData()
    }, []);

  return (
    <div className='container'>
        <h1>Ajax Demo</h1>

        <div className="row">
            <div className="col-md-4">
                <img src={product.photo} width={200} height={250}></img>
            </div>
            <div className="col-md-8">

                <h5>{product.title}</h5>

                    <div className="d-flex">
                        <h5>{product.price.toLocaleString('en-in', {style : 'currency', currency : 'INR'})}</h5>
                        <p>{product.actualprice}</p>
                    </div>

                    <div className="badge bg-success rounded">
                        {product.ratings.rate} <span className='bi bi-star-fill'></span>
                    </div>

                    <span className='fw-bold text-secondary'> 
                            {product.ratings.rate} rating and {product.ratings.reviews.toLocaleString()} reviews
                    </span>

                    <div>
                        <ul className='list-unstyled'>
                            {
                                product.offers.map(offer =>
                                    <li className='bi bi-tag-fill text-success mt-3' key={offer}> {offer} </li>
                                )
                            }
                        </ul    >
                    </div>


            </div>
        </div>

    </div>
  )
}

export default Fetch
