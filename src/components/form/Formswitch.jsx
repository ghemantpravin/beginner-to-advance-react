import React, { useState } from 'react'

function Formswitch() {


    const [theme, setTheme] = useState('bg-light')
    const [uname, setUname] = useState('text-black')
    const [btn, setBtn] = useState('btn btn-primary')

    function ChangeBack(e){
        if(e.target.checked){
            setTheme ('bg-dark')
            setUname('text-white')
            setBtn('btn btn-success')
        }else{
            setTheme ('bg-light')
            setUname('text-black')
            setBtn('btn btn-primary')
        }
        
    }

  return (
    <div className='container-fluid d-flex justify-content-center'>
            <form action="" className={`mt-4 p-4 border border-1 rounded ${theme}`}>
                <div className='mb-3 form-switch' >
                    <input type='checkbox' onClick={ChangeBack} className='form-check-input'></input>&nbsp;
                    <label htmlFor="form-check-label ms-2">Dark Theme</label>
                </div>
                <h4 className='bi bi-person-fill'> Sign In</h4>
                <label htmlFor="" className={uname}>Username</label>
                <input type='text' className='form-control'></input><br></br>
                <label htmlFor="" className={uname}>Password</label>
                <input type='text' className='form-control'></input><br></br>
                <button className={btn}>Submit</button>
            </form>
        </div>
  )
}

export default Formswitch
