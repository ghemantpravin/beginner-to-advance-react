import React from 'react'

function Navbar(props) {
  return (
    <div className='container'>
        <h1>Custom Component</h1>

        <nav>
            <div className='row'>
                <nav className='d-flex justify-content-between p-3 m-2 border border-1'>
                <div className='fw-bold fs-4'>
                    <img src={props.logo} width='50'/> {props.title} </div>
                <div>
                    {
                        props.menuItems.map(item=>
                            <span key={item} className='mx-3'>
                                <a>{item}</a>
                            </span>
                        )
                    }
                </div>
                <div>
                    <button className='btn btn-person-circle'>
                        Sign In
                    </button>
                </div>
                </nav>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
