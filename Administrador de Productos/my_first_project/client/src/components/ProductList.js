import React from 'react';
import { Link } from 'react-router-dom';

function ProductList(props) {
    return ( 
        <div>
            <h1>All Products:</h1>
            {props.product.map((product, index) => {
                return (
                <p key={index}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                    </p>
                )
            })}
        </div>
    );
}

export default ProductList;