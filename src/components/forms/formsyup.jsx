import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function Formsyup() {

    const formik = useFormik({
        initialValues : {
            username : '',
            age : 0,
            city : '',
            mobile : ''
        },
        validationSchema : yup.object({
            username : yup.string().required('Username is required').min(4, 'Name is too short'),
            age : yup.number().required('Age is required').min(20, 'Age is min 15').max(30, 'Not above 30'),
            // city : yup.string().required('city required'),
            mobile : yup.string().required('mobile required')
        }),
        onSubmit : (user) => {
            console.log(user)
        }
    })

  return (
    <div className='container'>
        <div className="row">
            <h1>Register</h1>
            <div className="col-md-4">
                <form action="" onSubmit={formik.handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type='text' {...formik.getFieldProps('username')} className='form-control' name='username'></input>
                    <p className='text-danger'>{formik.errors.username}</p>
                    <br />
                    <label htmlFor="">Age</label>
                    <input type='text' {...formik.getFieldProps('age')} className='form-control' name='age'></input>
                    <p className='text-danger'>{formik.errors.age}</p>
                    <br />
                    <select name="city" id=""  className='form-select' {...formik.getFieldProps('city')}>
                        <option value="-1">Select City</option>
                        <option value="delhi">Delhi</option>
                        <option value="nashik">Nashik</option>
                    </select>
                    <p className='text-danger'>{formik.errors.city}</p>
                    <br />
                    <label htmlFor="">Mobile</label>
                    <input type='text' {...formik.getFieldProps('mobile')} className='form-control' name='mobile'></input>
                    <p className='text-danger'>{formik.errors.mobile}</p>
                    <br />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Formsyup
