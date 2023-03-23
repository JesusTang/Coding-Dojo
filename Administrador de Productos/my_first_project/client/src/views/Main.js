import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error: ", err));
  });
  const createProduct = async (product) => {
    await axios
      .post("http://localhost:8000/api/products", product)
      .then((res) => {
        setProducts([...products, res.data]);
      })
      .then((res) => console.log("Response: ", res))
      .catch((err) => console.log("Error: ", err));
  };
  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialDescription=""
      />
      <br></br>
      <hr></hr>
      <ProductList products={products} />
    </div>
  );
}

export default Main;
