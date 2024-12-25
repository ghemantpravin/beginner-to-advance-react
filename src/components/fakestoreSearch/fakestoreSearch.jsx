import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { findAllInRenderedTree } from 'react-dom/test-utils';

function FakestoreSearch() {

    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([
            {
                id : 0, 
                title : '', 
                description : '',
                image : '',
                rating : {
                    rate : 0,
                    count : 0
                }
        }])

    const [cartItems, setcartItems] = useState([]);
    const [cartCount, setcartCount] = useState(cartItems.length);
    const [searchString, setsearchString] = useState('')


    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
            response.data.unshift('all')
            setCategories (response.data)
        })
    }

    function LoadProducts(url){
        axios.get(url)
        .then(response => {
            setProducts(response.data)
        })
    }
    
    function HandleCategoryChange(e){
        if(e.target.value === 'all')
        {
            LoadProducts('https://fakestoreapi.com/products')
        }
        else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    function HandleAddtoCart(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            cartItems.push(response.data)
            alert(`${response.data.title} \n Added to cart `)
            GetcartCount()
        })
    }

    function GetcartCount(){
        setcartCount(cartItems.length)
    }

    function HandleSearchString(e){
        setsearchString (e.target.value.toLowerCase());
    }

    function HandleSearchClick(){
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`)
    }

    function HandleRatingChange(e){
        axios.get(`https://fakestoreapi.com/products/`)
        .then(response => {
            let filteredProducts = response.data.filter (product => product.rating.rate>e.target.value)
            
            console.log(filteredProducts)

        })
    }

    useEffect(() => {
        LoadCategories()
        LoadProducts('https://fakestoreapi.com/products')
        GetcartCount()
    }, []);


  return (
    <div className='container'> 
        <div className="row">
         
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FakeStoreAPI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Jewelary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men's Clothing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Women's Clothing</a>
                            </li>
                            <div className="d-flex" role="search">
                                <input onChange={HandleSearchString} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button onClick={HandleSearchClick} className="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </ul>
                        <div className="d-flex" role="search">
                            <button className='btn btn-light'><span className='bi bi-person'></span></button>
                            <button className='btn btn-light mx-2'><span className='bi bi-heart'></span></button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-light bi bi-cart position-relative'>
                                <span className="badge bg-danger rounded rounded-circle position-absolute">{cartCount}</span>
                            </button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Products</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table>
                                                <thead className='table table-hover'>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Price</th>
                                                        <th>Preview</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                      cartItems.map ( item =>
                                                        <tr key={item}>
                                                            <td>{item.title}</td>
                                                            <td><img src={item.image} width='50' height='50'></img>  </td>
                                                            <td>{item.price}</td>
                                                        </tr>
                                                      )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


        <div className="row mt-5">
            <div className="col-md-2">
                <p>Select Category</p>
                <select name="" id="" className='form-select' onChange={HandleCategoryChange}>
                    {
                        categories.map(category =><option key={category} value={category}>{category.toUpperCase()}</option>)
                    }
                </select>
            
            <p>Label</p>
                    
            <div>
                <input type='checkbox' value={4} onChange={HandleRatingChange} />
                   <span> 4 <span className='bi bi-star-fill'> Above</span></span>
            </div>
            <div>
                <input type='checkbox' value={3} onChange={HandleRatingChange}/>
                   <span> 3 <span className='bi bi-star-fill'> Above</span></span>
            </div>
                    
            </div>

            <div className="col-md-10 d-flex flex-wrap overflow-auto">
                   {
                    products.map(product=>
                        <div className="card m-2" key={product.id} style={{width : 250}}>
                            <img className="card-img-top" src={product.image} style={{height : 200}}></img>
                                <div className="card-header" style={{height : 200}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <p>Price</p>
                                    <p>{product.price}</p>
                                    <p>Rating</p>
                                    <p>{product.rating.rate} <span className='bi bi-star-fill text-success'></span> </p>
                                </div>
                                <div className="card-footer">
                                    <button onClick={()=> HandleAddtoCart(product.id)} className='btn btn-warning w-100'> <span className='bi bi-cart4'> ADD TO CART</span> </button>
                                </div>
                        </div>
                    )
                   }
            </div>
        </div>     
    </div>

  )
}

export default FakestoreSearch
