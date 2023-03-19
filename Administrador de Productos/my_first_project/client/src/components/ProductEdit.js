import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = (props) => {
  const navegar = useNavigate()
  const {id} = useParams()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:8000/api/products/'+id+'/edit', {
      title,
      price,
      description
    })
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("Error: ", err))
      .then(res=>navegar('/'))
  } 

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res=>{
      setTitle(res.data.title)
      setPrice(res.data.price)
      setDescription(res.data.description)

    })
    .catch(err=>console.log("Error: ", err))
}, [id])

  return ( 
    <div>
      <Link to='/'>Inicio</Link>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
        </p>
        <p>
          <label>Price</label>
          <input type="number" min={0} onChange={e => setPrice(e.target.value)} value={price}/>
        </p>
        <p>
          <label>Description</label>
          <input type="text" onChange={e => setDescription(e.target.value)} value={description}/>
        </p>
        <input type='submit'/>
      </form>
    </div>
  );
}

export default ProductEdit ;