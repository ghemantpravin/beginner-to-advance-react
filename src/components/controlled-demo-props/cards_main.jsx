import React from 'react'
import Cards from '../../custom-components-props/cards'

function Cards_Main() {
  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <Cards
              image = 'logo192.png'
              title = "Card title 1"
              text = "Some quick example text to build on the card title and make up the bulk of the card's content."
              button = "Read More"
            ></Cards>
            </div>
            <div className="col-md-4">
            <Cards
              image = 'logo192.png'
              title = "Card title 2"
              text = "Some quick example text to build on the card title and make up the bulk of the card's content."
              button = "Read More"
            ></Cards>
            </div>
            <div className="col-md-4">
            <Cards
              image = 'logo192.png'
              title = "Card title 3"
              text = "Some quick example text to build on the card title and make up the bulk of the card's content."
              button = "Read More"
            ></Cards>
          </div>
          </div>
        </div>
  )
}

export default Cards_Main
