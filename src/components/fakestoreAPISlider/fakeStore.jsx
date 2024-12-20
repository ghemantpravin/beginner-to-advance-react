import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function FakeStoreSlider() {


    const [product, setProduct] = useState({
        id : 0,
        title : '',
        price : 0,
        category : '',
        description : '',
        image : ''
    })

    const [status, setStatus] = useState('Manual');

    let count = useRef(1);
    let thread = useRef(null);

    function HandlePlayClick(){
        thread.current = setInterval(LoadDataAuto, 3000)
        setStatus('Slide Show Running')
    }

    function HandlePauseClick(){
        clearInterval(thread.current)
        setStatus('Slide Show Paused')
    }

    function LoadData(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            setProduct(response.data)
        })
    }

    function LoadDataAuto(){
        count.current = count.current + 1;
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
        .then((response) => {
            setProduct(response.data)
        })
    }

    function HandleNextClick(){
        count.current = count.current + 1;
        LoadData(count.current);
    }

    function HandlePreviousClick(){
        count.current = count.current - 1;
        LoadData(count.current);
    }

    function RangeChange(e){
        count.current = e.target.value;
        LoadData(count.current)
    }

    useEffect(() => {
        LoadData(1)
    }, []);

  return (

    <div className='container'>
        <h2>Fake Store Slider</h2>
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="card p-2 mt-4 w-50">
                    <div className="card-header">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <p className='text-center fw-bold'>{status}</p>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={HandlePreviousClick} className='bi bi-chevron-left btn btn-dark'></button>
                            </div>
                            <div className="col-10">
                                {/* <img class="card-img-top" style={{width : 250, height : 250, margin : 'auto', display : 'table'}} src={product.image} alt="Card image cap"></img> */}
                                <p className='card-text text-center mt-4'>{product.description}</p>
                                <input onChange={RangeChange} type='range' min='1' max='20' value={count.current}></input>
                            </div>
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={HandleNextClick} className='bi bi-chevron-right btn btn-dark'></button>
                            </div>
                        </div>

                    </div>

                    <div className="card-footer text-center">
                        <button onClick={HandlePlayClick} className='bi bi-play btn btn-primary mx-2'></button>
                        <button onClick={HandlePauseClick} className='bi bi-pause btn btn-danger mx-2'></button>
                    </div>
                </div>
            </div>
        </div>

        

            
    </div>
  )
}

export default FakeStoreSlider
