import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function Edit() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
  }, [id]);
  const updateProduct = async (product) => {
    await axios.put(
      "http://localhost:8000/api/products/" + id + "/edit",
      product
    );
  };
  return (
    <div>
      <Link to="/">Inicio</Link>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
}

export default Edit;
