import React from 'react'
import { useFormik } from 'formik'

function Forms2() {

    const abc = useFormik({
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
        onSubmit : (values) => {
            console.log(values)
        }
    })

  return (
    <div className='container'>
        <h1>Formik Examples</h1>
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={abc.handleSubmit}>
                    <div className="form-check">
                        <input onChange={abc.handleChange} value='male' className="form-check-input" type="radio" id="gender"></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check">
                        <input onChange={abc.handleChange}  value='female' className="form-check-input" type="radio" id="gender"></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Your Name' id='name'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Middle Name' id='middle'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Surname' id='surname'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Your Id' id='id'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Age' id='age'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Mobile Number' id='mobile'></input>
                    <br />
                    <input type="text" onChange={abc.handleChange} 
                    className="form-control"  placeholder='Email' id='email'></input>
                    <br />
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forms2
