import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

export function Forms() {

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-3">
            <h1>Formik Form</h1>
                <Formik initialValues={{name : '',middle : '',surname : '',mobile : '',eid : '',email : ''}}
                validationSchema={yup.object ({
                    name : yup.string().required(),
                    middle : yup.string().required(),
                    surname : yup.string().required(),
                    mobile : yup.string().required(),
                    eid : yup.string().required(),
                    email : yup.string().required(),
                    })}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    
            <Form>
                <p>name</p>
                <Field name = 'name' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='name'></ErrorMessage></p>

                <p>middle</p>
                <Field name = 'middle' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='middle'></ErrorMessage></p>

                <p>surname</p>
                <Field name = 'surname' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='surname'></ErrorMessage></p>

                <p>mobile</p>
                <Field name = 'mobile' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='mobile'></ErrorMessage></p>

                <p>eid</p>
                <Field name = 'eid' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='eid'></ErrorMessage></p>

                <p>email</p>
                <Field name = 'email' type='text' className='form-control'></Field>
                <p className='text-danger'><ErrorMessage name='email'></ErrorMessage></p>

                <br></br>
                <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
                </Formik>
            </div>
        </div>
        </div>
  );
}

export default Forms
