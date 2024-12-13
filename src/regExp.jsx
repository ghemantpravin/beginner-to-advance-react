import React, { useEffect, useState } from 'react'

function RegExp() {

    const [mobile, setMobile] = useState ('8308201221')
    const [regExp] = useState (/\+\(1\)\(d{3}\)\s\d{3}-\d{4}/)

    useEffect(() => {

        setMobile(prompt('Enter mobile number'))

    }, []);

  return (
    <div className='container'>
        <h1>Match Regular Expression</h1>

            {
                (mobile.match(regExp))?'Mobile Verified' : 'Enter corret mobile number'
            }

    </div>
  )
}

export default RegExp
