import ProductForm from '../components/ProductForm';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Main() {
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProduct(res.data))
        .catch(err=>console.log("Error: ", err))
    })
    return ( 
        <div>
            <ProductForm/>
            <br></br>
            <hr></hr>
            <ProductList product={product}/>
        </div>
        
    );
}

export default Main;


