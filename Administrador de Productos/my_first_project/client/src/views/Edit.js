import React, { useEffect, useState } from 'react';
import ProductEdit from '../components/ProductEdit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edit() {
    const [product, setProduct] = useState([]);
    const {id} = useParams()
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log("Error: ", err))
    })
    return ( 
        <div>
            <ProductEdit product={product}/>
        </div>
        
    );
}

export default Edit;
