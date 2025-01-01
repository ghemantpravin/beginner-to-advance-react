import React, { useState } from 'react'

function Conditional_rendering() {

    const [sign, setSign] =  useState(false)

    function Signing(){
        setSign(true)
    }

    function SigningOut(){
        setSign(false)
    }

  return (
    <div className='container'>
        <h1>Conditional Rendering</h1>
        <div className="row">
            <div className="col-md-12">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div className='main'>
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                                    (sign === true)?
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            :
                            <div></div>
                        }
                            <div class="d-flex" role="search">
                                <div>
                                    {
                                (sign === true)? <button onClick={SigningOut} className='btn btn-danger'>SignOut</button> : <button onClick={Signing} className='btn btn-primary'>SignIN</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


                

            </div>
        </div>
    </div>
  )
}

export default Conditional_rendering
