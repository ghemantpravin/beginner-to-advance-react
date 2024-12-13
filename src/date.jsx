import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment';

function DateInfo() {

    const [mfd] = useState(Date())

    useEffect(() => {
        
    }, []);

  return (
    <div className='container'>
        <h1>Date</h1>
        <h4>{moment(mfd).format('dddd DD MMMM, yy')}</h4>
    </div>
  )
}

export default DateInfo
