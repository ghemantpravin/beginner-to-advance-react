import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function Newform() {
  return (
    <div className='container'>
        <div className="row">
            <h1>Formik New Form</h1>
            <Formik initialValues={{username : '', age : 0, mobile : ''}} 
            validationSchema=
            {yup.object({username : yup.string().required('name rquired'),
                age : yup.string().required('age is required'),
                mobile : yup.string().required('number is required')
            })}
            onSubmit={(values) => {
                console.log(values)
            }}>
                <Form>
                    <p>Username</p>
                    <Field name = 'username' type='text'></Field>
                    <p className='text-danger'><ErrorMessage name='username'></ErrorMessage></p>

                    <p>Age</p>
                    <Field name = 'age' type='text'></Field>
                    <ErrorMessage name='age'></ErrorMessage>

                    <p>mobile</p>
                    <Field name = 'mobile' type='text'></Field>
                    <p className='text-danger'><ErrorMessage  name='mobile'></ErrorMessage></p>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default Newform
