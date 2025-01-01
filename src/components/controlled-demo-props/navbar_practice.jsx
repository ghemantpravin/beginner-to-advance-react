import React from 'react'
import Practice_navbar from '../../custom-components-props/practice_navbar'

function Navbar_practice() {
  return (
    <div className='container'>
        <div className="row">
            {/* <h1>Navbar with Bootstrap using props</h1> */}
            <div className="col-md-12">
              <Practice_navbar
                title = 'Bootstrap Navigation'
                menu1 = "Home"
                menu2 = "About"
                menu3 = "Contact"
                search = "Find"
                place = "Please Fine Here!"
              ></Practice_navbar>

              <Practice_navbar
                head = "Bootstrap"
                nav1 = "Home"
                nav2 = "Features"
                nav3 = "Pricing"
                nav4 = "Dropdown 1"
                nav5 = "Dropdown 2"
                nav6 = "Dropdown 3"
              ></Practice_navbar>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar_practice
