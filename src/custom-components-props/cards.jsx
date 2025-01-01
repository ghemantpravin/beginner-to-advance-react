import React from 'react'


//not mandatory to use props name you can use any name instead of props like xyz, abc
function Cards(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <div class="card">
                    <img src={props.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <a href="#" class="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
