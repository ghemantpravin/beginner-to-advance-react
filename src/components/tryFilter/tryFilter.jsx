import React, { useState, useEffect } from "react";

const ProductFilter = () => {
  const [products, setProducts] = useState([]); // All products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [categories, setCategories] = useState([]); // List of categories
  const [selectedCategory, setSelectedCategory] = useState("All"); // Current selected category

  // Fetch products from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);

        // Extract unique categories from the product list
        const uniqueCategories = ["All", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);

        // Initially display all products
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Update filtered products when the selected category changes
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  return (
    <div className="container">
      <h1>Product Filter</h1>
            <div className="row">
                <div className="col-md-3">
                    {/* Category Filter Dropdown */}
                    <select className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                        ))}
                    </select>
                </div>
                    
                <div className="col-md-9">
                    {/* Product List */}
                    {/* <ul>
                        {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>Category: {product.category}</p>
                            <img src={product.image}></img>

                        </li>
                        ))}
                    </ul> */}
                <div className="row">
                    {/* <div className="alldata"> */}
                    {
                    filteredProducts.map((product)=> {
                            return(
                        <div className="col-md-4" key={product}>
                            <div className="card">
                                <img src={product.image} style={{height : 200, width : 200, margin: 'auto'}}></img>
                                <div className="card-body">
                                    <h5 className='card-title'>{product.id}</h5>
                                    <p className='card-text'>{product.title}</p>
                                    <p className='card-text'>{product.price}</p>
                                    <p className='card-text'>{product.category}</p>
                                    <p className='card-text'>{product.rating.rate}</p>
                                </div>
                            </div>
                        </div>
                                )
                        })
                    }
                    {/* </div> */}
                </div>

                </div>
            </div>
    </div>
  );
};

export default ProductFilter;
