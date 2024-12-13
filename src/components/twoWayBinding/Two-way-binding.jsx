import React from 'react'
import { useState } from 'react'

function Twowaybinding() {

    const[text, setText] = useState()

    function Changetext(e){
        setText(e.target.value)
    }
  return (
    //only onchange supports two way binding

    <div className='container'>
        <h1>Two way Binding</h1>

        <label htmlFor="">Input Value</label> <input value={text} type='text' onChange={Changetext}></input>
        <p>{text}</p>
    </div>
  )
}

export default Twowaybinding
