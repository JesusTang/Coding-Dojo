import React from 'react';
function ProductList(props) {
    return ( 
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>{product.title}, {product.price}, {product.description}</p>
            })}
        </div>
    );
}

export default ProductList;