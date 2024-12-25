import React, { useState } from 'react'

function ImageHover() {

  const [msg, setMsg] = useState('')

  function GetDetails(data){
    setMsg(data)
  }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-3">
                <img src='img1.png' onMouseEnter={(e) => GetDetails('data science')} style={{width: 200}}></img>
            </div>
            <div className="col-md-3">
                <img src='img2.png' onMouseEnter={(e) => GetDetails('Javascript')} style={{width: 120}}></img>
            </div>
          <p>{msg}</p>
        </div>
    </div>
  )
}

export default ImageHover


