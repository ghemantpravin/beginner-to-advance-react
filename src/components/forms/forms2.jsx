import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Forms2() {

    const formik = useFormik({
        initialValues : {
            name : '',
            middle : '',
            surname : '',
            id : 0,
            age : 0,
            mobile : 0,
            email : '',
            gender : ''
        },
        validationSchema : yup.object(
            {
                name : yup.string().required('Username is required'),
                middle : yup.string().required('Username is required'),
                surname : yup.string().required('Username is required'),
                id : yup.number().required('Username is required'),
                age : yup.number().required('Username is required'),
                mobile : yup.number().required,
                email : yup.string().required,
                gender : yup.string().required
            }
        ),
        onSubmit : (values) => {
            console.log(values)
        }
    })

  return (
    <div className='container'>
        <h1>Formik Examples2</h1>
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-check">
                        <input onChange={formik.handleChange} value='male' className="form-check-input" type="radio" id="gender"></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check">
                        <input onChange={formik.handleChange}  value='female' className="form-check-input" type="radio" id="gender"></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Your Name' id='name'></input>
                    <p className='text-danger'>{formik.errors.name}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Middle Name' id='middle'></input>
                    <p className='text-danger'>{formik.errors.middle}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Surname' id='surname'></input>
                    <p className='text-danger'>{formik.errors.surname}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Your Id' id='id'></input>
                    <p className='text-danger'>{formik.errors.id}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Age' id='age'></input>
                    <p className='text-danger'>{formik.errors.age}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Mobile Number' id='mobile'></input>
                    <p className='text-danger'>{formik.errors.mobile}</p>
                    <br />
                    <input type="text" onChange={formik.handleChange} 
                    className="form-control"  placeholder='Email' id='email'></input>
                    <p className='text-danger'>{formik.errors.email}</p>
                    <br />
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forms2
