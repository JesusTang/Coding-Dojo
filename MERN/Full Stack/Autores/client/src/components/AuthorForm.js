import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {
  const { initialName, onSubmitProp, message, errors } = props;
  const [name, setName] = useState(initialName)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
      onSubmitProp({name})
  }

  return ( 
    <div className=' row justify-content-center bg-light p-5'> 
      <h2>Favourite Authors</h2>
      <h6>
        <Link to={'/'}>Home</Link>
        </h6>
      <p>{message}</p>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) =>  {return <h6 style={{backgroundColor: '#f7d6d9'}} className=' text-danger card p-2' key={index}>{err}</h6>})}
        <label className='form-label'>Name: </label> 
        <br></br>
        <input className='form-control mb-3' type="text" onChange={e => setName(e.target.value)} value={name}/>
        <input className='btn btn-secondary' type='submit'/>
      </form>
    </div>
  );
}

export default AuthorForm ;