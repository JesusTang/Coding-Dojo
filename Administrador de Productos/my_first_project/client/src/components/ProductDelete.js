import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDelete(props) {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const navegar = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("Error mac: ", err));
  }, [id]);
  const sayYes = () => {
    axios.delete(`http://localhost:8000/api/products/${id}/delete`);
    navegar("/");
  };
  const sayNo = () => {
    navegar("/");
  };
  return (
    <div>
      <div>
        <Link to="/">Inicio</Link>
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
      <h1>Seguro que quieres eliminar este producto?</h1>
      <button onClick={sayYes}>Yes</button>
      <button onClick={sayNo}>No</button>
    </div>
  );
}

export default ProductDelete;
