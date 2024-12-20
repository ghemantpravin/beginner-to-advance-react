import React, { useRef, useState } from 'react'

function SetTimeout() {
    
    const [msg, setMsg] = useState('')

    let ref = useRef

    function HandleClick()
    {   
        setTimeout(msg1, 3000)
        ref.current = setTimeout(msg2, 6000)
        setTimeout(msg3, 9000)
    }

    function msg1(){
     setMsg('Welcome - msg1')
    }

    function msg2(){
        setMsg('To - msg2')
    }

    function msg3(){
        setMsg('React - msg3')
    }

    function CancelClick(){
        clearTimeout(ref.current)
    }

  return (
    <div className='container'>
        <h1>Timeout Functions</h1>

        <button onClick={HandleClick} className='btn btn-primary'>Click Me!</button>&nbsp;
        <button onClick={CancelClick} className='btn btn-secondary'>Cancel</button>
        <p>{msg}</p>

    </div>
  )
}

export default SetTimeout
