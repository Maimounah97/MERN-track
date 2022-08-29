import React from 'react'
import axios from 'axios';
    
const ProductsList = (props) => {
    return (
        <div>
            <h2>All Products:</h2>
            {props.products.map( (product, i) =>
                <p key={i}>{product.title}</p>
            )}
        </div>
    )
}
    
export default ProductsList;
