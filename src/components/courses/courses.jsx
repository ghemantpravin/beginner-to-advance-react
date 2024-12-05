import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Courses() {

    const [courses, setCourses] = useState([{
        card : '',
        title : '',
        rating : 0,
        start : '',
        faculty : '',
        duration : '',
        image : ''
    }]);

    function LoadData(){
        axios.get('courses.json')
        .then((response) =>{
            setCourses(response.data)
        })
    }

    useEffect(() => {
        LoadData()
    }, []);

  return (
    <div className='container'>
        <h1>Courses</h1>

        <div className="row">
                {
                courses.map((offer)=> {
                        return(
                    <div className="col-md-4" key={offer}>
                        <div className="card">
                            <img src={offer.image} style={{height : 200, width : 200, margin: 'auto'}}></img>
                            <div className="card-body">
                                <h5 className='card-title'>{offer.title}</h5>
                                <p className='card-text'>{offer.rating}</p>
                                <p className='card-text'>{offer.faculty}</p>
                                <p className='card-text'>{offer.start}</p>
                                <p className='card-text'>{offer.duration}</p>
                            </div>
                        </div>
                    </div>
                            )
                    })
                }
                </div>  

    </div>
  )
}

export default Courses
