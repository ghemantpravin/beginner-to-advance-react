import { useState, useEffect } from 'react'
import axios from 'axios';
import React from 'react'

function EventDemo2() {

    const [leftImages, rightsetImages] = useState([{img_src :''}])

    const [preview, setPreview] = useState('img1.png')

    useEffect(() => {

        axios.get('images.json')
        .then(response => {
            rightsetImages(response.data)
        })
        

    }, []);

    function HandleMouseOver(e){
        setPreview(e.target.src)
    }

  return (
    <div className='container'>
        <div className="row">
        <h1>On Mouse Over</h1>
        <div className="col-sm-3 col-xs-3">
            {
                leftImages.map(leftImage => 
                    <div className='my-3'>
                        <img width="100" onMouseOver={HandleMouseOver} height="100" src={leftImage.img_src}></img>
                    </div>
                )   
            }
        </div>
        <div className="col-sm-9 col-xs-9">
                    <div className='my-3'>
                        <img width="200" height="200" src={preview}></img>
                    </div>
        </div>
        </div>
    </div>
  )
}

export default EventDemo2
