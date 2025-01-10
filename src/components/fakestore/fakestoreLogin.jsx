import { useFormik } from 'formik'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import { Route } from 'react-router'

import { BrowserRouter } from 'react-router'

function FakestoreLogin() {

    const [cookies, setCookie, removeCookie] = useCookies(['username'])

    const  navigate = useNavigate()

    const formik = useFormik({
        initialValues : {
            username : '',
            password : ''
        },
        onSubmit:(user) =>  {
            setCookie('username', user.username, {expires : new Date('2024-09-19')})
            navigate('/')
        }
        
    })


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <form className='w-25' onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>Username</dt>
                        <dd><input type='text' name='username' onChange={formik.handleChange} className='form-control'></input></dd>

                        <dt>Password</dt>
                        <dd><input type='password' name='password' onChange={formik.handleChange} className='form-control'></input></dd>
                    </dl>
                    <button type='submit' className='btn btn-primary'>SUBMIT</button>
                    
                </form>
            </div>
            <div className="col-md-12">
                {/* <div>
                    <Link to="/">Home</Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default FakestoreLogin
