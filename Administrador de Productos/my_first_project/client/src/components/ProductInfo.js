import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductInfo(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("Error: ", err));
  }, [id]);
  return (
    <div>
      <Link to="/">Inicio</Link>
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/${product._id}/delete`}> Delete </Link>
    </div>
  );
}

export default ProductInfo;
