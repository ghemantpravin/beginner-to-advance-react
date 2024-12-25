import React, { useState } from 'react';

function Account() {


    const [msg, setMsg] = useState('')

    function Coping(){
        setMsg('Number is copied')
    }
    
    function HandleBlur()
    {
        setMsg('')
    }

    function HandlePaste(){
        document.onpaste = function (){
            return false
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-3">
                <input type='text' onCopy={Coping} onBlur={HandleBlur} placeholder='Account Number' className='form-control mt-3'/> <br></br>
                <p>{msg}</p>
                <input type='text' onPaste={HandlePaste} placeholder='Verify Account Number' className='form-control'/>
            </div>
        </div>
        
    </div>
  );
}

export default Account;
