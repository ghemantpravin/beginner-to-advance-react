import { useFormik } from 'formik'
import React from 'react'

function Forms() {

    const formik = useFormik({
        initialValues : {
            name : '',
            surname : '',
            age : 0,
            city : ''
        },
        onSubmit : (user) => {
            console.log(user)
        }
    })


  return (
    <div className='container'>
        <h1>Forms in React</h1>
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={formik.handleChange} className="form-control" id="name"></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Surname</label>
                        <input type="text" onChange={formik.handleChange} className="form-control" id="surname"></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Age</label>
                        <input type="email" onChange={formik.handleChange} className="form-control" id="age"></input>
                    </div>
                    <br />
                    <label>Select One</label>
                    <select className="form-control" id='city' onChange={formik.handleChange}>
                        <option value="Nashik">Nashik</option>
                        <option value="Nashik">Pune</option>
                    </select>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forms
