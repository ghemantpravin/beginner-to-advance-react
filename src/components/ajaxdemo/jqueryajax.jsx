import React, { useEffect, useState } from 'react'
import $ from 'jquery'

function Amazon() {

    const [amazon, amazonSetProduct] = useState({
        title : '',
        link : '',
        ratings : {
            rate : 0,
            ratings : 0,
            reviews : 0
        },
        photo : '',
        price : 0,
        taxes : '',
        offers : [{

        }],
        about : [

        ]
    })

    function LoadData(){
        $.ajax({
            method : 'get',
            url : 'amazon.json',
            success : (response) => {
                amazonSetProduct (response)
            },
            error: (ex) => {
                console.log(ex)
            }

        })
    }

    useEffect(() => {
        LoadData()
    }, []);

  return (
    <div className='container'> 
        <h1>Amazon Product</h1>

        <div className="row">
            <div className="col-md-4">
                <img src={amazon.photo} style={{width : 400, height: 500}}></img>
            </div>
            <div className="col-md-8">
                <h5>{amazon.title}</h5>
                <a href='https://www.google.com/'>{amazon.link}</a>
                <h5 className='mt-3'>{amazon.price.toLocaleString('en-in', {style : 'currency', currency : 'INR'})}</h5>
                <p>{amazon.taxes}</p>

                <div className="rateandall">
                    <div className="d-flex">
                        <div className="badge bg-success rounded" style={{height : 22}}>
                            {amazon.ratings.rate} <span className='bi bi-star-fill'> </span>
                        </div>
                        <p>{amazon.ratings.ratings} rating and reviews are {amazon.ratings.reviews}</p>
                    </div> 
                </div>

                <div className="about">
                    <ul className='list-unstyled'>
                        {
                            amazon.about.map(abt =>
                                <li className='bi bi-tag-fill text-success mt-3' key={abt}> {abt}</li>
                            )
                        }
                    </ul>
                </div>

                <div className="about">
                    <ul className='list-unstyled'>
                        {
                            amazon.about.map((abt) => {
                                <li className='bi bi-tag-fill text-success mt-3' key={abt}> {abt}</li>}
                            )
                        }
                    </ul>
                </div>
                
            <div className="row">
                {
                amazon.offers.map((offer)=> {
                        return(
                    <div className="col-md-4" key={offer}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className='card-title'>{offer.title}</h5>
                                <p className='card-text'>{offer.Offer_1}</p>
                                <p className='card-text'>{offer.Offer_2}</p>
                            </div>
                        </div>
                    </div>
                            )
                    })
                }
                </div>  
                <br></br>
            </div>
        </div>
    </div>
               
                    
            
                    
  )
}

export default Amazon
