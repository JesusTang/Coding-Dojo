import ProductForm from '../components/ProductForm';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Main() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log("Error: ", err))
    })
    return ( 
        <div>
            <ProductForm/>
            <br></br>
            <hr></hr>
            <ProductList products={products}/>
        </div>
        
    );
}

export default Main;


