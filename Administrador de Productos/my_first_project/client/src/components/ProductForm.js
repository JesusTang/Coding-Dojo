import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/products', {
      title,
      price,
      description
    })
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("Error: ", err))
  }

  return ( 
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
  );
}

export default PersonForm ;