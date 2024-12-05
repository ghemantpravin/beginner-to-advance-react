// import React, { useState } from 'react'

function Databinding() {

    var categories = ["All", "Sachin", "Dravid", "Sourav", "Kohli"];

    var products = [
        {
            productname : 'TV', price : 21400
        },
        {
            productname : 'Footwear', price : 100
        }
]

  return (
    <div className='container'>
        <h1>Databinding</h1>

        <div className="row">
            <div className="col-md-12">
            {
                categories.map
                (category=> <li key={category}>{category}</li>) 
            }

            
            </div>
        </div>
        <div className="row">
            <table>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>

                    {
                        products.map( product=>
                            <tr key={product}>
                                <td>{product.productname}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <select>
                {
                    categories.map (category => 
                    <option key={category} value={category}>
                        {category}  
                    </option>
                    )
                }
            </select>
        </div>

    </div>
  )
}

export default Databinding
