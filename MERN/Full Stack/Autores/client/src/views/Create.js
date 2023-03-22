import AuthorForm from '../components/AuthorForm';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const message = 'Add a new author'
  const [errors, setErrors] = useState([])
  const navegar = useNavigate()
  const createAuthor = async (author) => {
    try {
      await axios.post('http://localhost:8000/api/authors', {...author})
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
      <AuthorForm 
        onSubmitProp={createAuthor} 
        message = {message}
        initialName=''
        errors = {errors}
      />
    </div>
    
  );
}

export default Create;