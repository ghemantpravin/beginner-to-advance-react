import React from 'react'
import { useParams } from 'react-router'

function Details() {

    let params = useParams()

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
            <h1>Details</h1>
        </div>
        <div className="card">
            <div className="card-body">
                <p>Id</p>
                <p className='card-title'>{params.id}</p>
                <p>Name</p>
                <p className='card-title'>{params.name}</p>
                <p>Price</p>
                <p className='card-title'>{params.price}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
