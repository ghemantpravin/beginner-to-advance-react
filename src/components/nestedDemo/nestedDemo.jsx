import React, { useState } from 'react';

function NestedDemo() {

    
const [data] = useState(
    [
        {
            "category" : "Electronics", 
            "products" : ["Television", "Mobile"]
        },

        {
            "category" : "Footwear", 
            "products" : ["Causuals", "Sneaker"]
        }
    ]
)

  return (
    <div className='container'>
        <h1>Nested Data</h1>
        <div className="row">
            <div className="col-md-4">
                <ol>
                    {
                        data.map(item =>
                            <li key={item}>
                                {item.category}
                                <ul>
                                    {
                                        item.products.map(product =>
                                            <li key={product}>{product}</li>
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ol>
            </div>
            <div className="col-md-4">
                <select name="" id="" className='form-select'>
                    {
                        data.map((item) =>
                            <optgroup key={item.category} label={item.category}> 
                                {
                                  item.products.map((product) =>
                                  <option>
                                    {product}
                                  </option>
                                )
                                }
                            </optgroup>
                        )
                    }
                </select>
            </div>
        </div>
    </div>
  );
}

export default NestedDemo;
