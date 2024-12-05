import React, { useState, useEffect } from 'react'

function Primitivedatabinding() {

    let stock = false

    const [price, setPrice] = useState(254500)

    const [product, setproduct] = useState('')

    useEffect(() => {
        setPrice(58785)
        setproduct('Samsung')
    }, []);

  return (
    <div className='container'>
        <h1>Primitive Data Binding</h1>

        <p> {(stock == true)? 'Available':'Out of stock'}</p>

        <p>{price}</p>

        <p>{product}</p>

    </div>
  )
}

export default Primitivedatabinding
