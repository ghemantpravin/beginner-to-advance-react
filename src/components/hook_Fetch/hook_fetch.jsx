import React from 'react'
// import '../../hooks/fetch'
import { useFetch } from '../../hooks/fetch'

function Hook_fetch() {

    let categories = useFetch('https://fakestoreapi.com/products/categories')

  return (
    <div className='container'>
            <h1>Custom Hook from url</h1>

        <div className="row">
            <div className="col-md-4">
                <select name="" id="">
                    {
                        categories.map(category =>
                            <option key={category}>{category}</option>
                        )
                    }
                </select>
            </div>
        </div>
    </div>
  )
}

export default Hook_fetch
