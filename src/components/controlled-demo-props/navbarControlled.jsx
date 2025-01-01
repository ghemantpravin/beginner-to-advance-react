import React from 'react'
import Navbar from '../../custom-components-props/navbar'


function NavbarControlled() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h1>Navrbar with Props</h1>
                 <Navbar title='Shopper'
                    menuItems = {['Home', 'Products', 'About', 'Contact']}
                    logo='logo192.png'
                    >
                </Navbar>   

                <Navbar title='My Practice'
                    menuItems = {['Home', 'New Products', 'Linking', 'Courses']}
                    logo='mobile2.png'
                    >
                </Navbar>
            </div>
        </div>
    </div>
  )
}

export default NavbarControlled
