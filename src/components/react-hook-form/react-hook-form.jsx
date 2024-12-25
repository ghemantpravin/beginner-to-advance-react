import React from 'react'
import { useForm } from 'react-hook-form';

function React_hook_form() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-3">
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <label htmlFor="">firstName</label>
                    <input {...register('firstName', { required: true })} className='form-control' type='text' name='firstNameame'/>
                    {errors.firstName && <p>first name is required.</p>}

                    <label htmlFor="">lastName</label>
                    <input {...register('lastName', { required: true })} className='form-control' type='text' name='lastName'/>
                    {errors.lastName && <p>Last name is required.</p>}

                    <label htmlFor="">Age</label>
                    <input {...register('age', { pattern: /\d+/, required: true })} type='text' className='form-control' name='age'/>
                    {errors.age && <p>Please enter number for age.</p>}
                    <br />
                    <input type="submit" className='btn btn-primary'/>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default React_hook_form
