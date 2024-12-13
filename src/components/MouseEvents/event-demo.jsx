import React, { useState, useEffect } from 'react'

function EventDemo() {

    const [styleObj, setStyleObj] = useState({color : 'black'});

    useEffect(() => {
        ChangeColor1()
        ChangeColor2()
        ChangeColor3()
        ChangeColor11()
        ChangeColor12()
        ChangeColor13()
    }, []);

    function ChangeColor1(){
        setStyleObj ({color : 'red'})
    }

    function ChangeColor2(){
        setStyleObj ({color : 'skyblue'})
    }

    function ChangeColor3(){
        setStyleObj ({color : 'orange'})
    }

    function ChangeColor11(){
        setStyleObj ({color : 'black'})
    }

    function ChangeColor12(){
        setStyleObj ({color : 'black'})
    }

    function ChangeColor13(){
        setStyleObj ({color : 'black'})
    }

  return (
    <div className='container'>
        <h1>Mouse Event Demo</h1>
            <div className="d-flex p-4 text-white text-center">
                <div onMouseOut={ChangeColor11} onMouseOver={ChangeColor1} style={{width: '100px', backgroundColor : 'red'}}>RED</div>
                <div onMouseOut={ChangeColor12} onMouseOver={ChangeColor2} style={{width: '100px', backgroundColor : 'skyblue'}}>SKYBLUE</div>
                <div onMouseOut={ChangeColor13} onMouseOver={ChangeColor3} style={{width: '100px', backgroundColor : 'orange'}}>ORANGE</div>
            </div>
        <h2 style={styleObj}>Sample Text</h2>
    </div>
  )
}

export default EventDemo
