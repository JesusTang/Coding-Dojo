import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

function Edit() {
  const {id} = useParams()
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const message = 'Edit this author'
  const navegar = useNavigate()
  const [errors, setErrors] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8000/api/authors/'+id)
    .then(res=>{
      setAuthor(res.data)
      setLoaded(true);
    })
    .catch(err=>console.log("Error: ", err))
  }, [id])
  
  const updateAuthor = async (author) => {
    try {
      await axios.put('http://localhost:8000/api/authors/'+id+'/edit', author)
      navegar('/')
  }
    catch (err) {
      const errorResponse = err.response.data.errors; 
      const errorArr = []; 
      for (const key of Object.keys(errorResponse)) { 
        errorArr.push(errorResponse[key].message)
      }
      setErrors(errorArr);
    }
  }
  return ( 
    <div className='container col-5'>
      <hr></hr>
      {loaded && (
        <AuthorForm 
        onSubmitProp={updateAuthor} 
        message = {message}
        initialName={author.name}
        errors = {errors}
        />
      )}
    </div>
  );
}

export default Edit;
