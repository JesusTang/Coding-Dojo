import { Link, useNavigate } from 'react-router-dom';
import AuthorDelete from './AuthorDelete';
function AuthorList(props) {
  const navegar = useNavigate()
  const GoToEdit =  (id) => {
    navegar(`/${id}/edit`)
  }
  const btn_style = (index) => {
    if (index%2===0) {
      const style = 'list-group-item-light'
      return style
    }
    else {
      const style = 'list-group-item-secondary'
      return style
    }
  }
  return ( 
    <div>
      <h1>Favourite Authors:</h1>
      <h6><Link to={'/create'}>Add an author</Link></h6>
      <p className=''>We have quotes by:</p>
      <table className="table table-striped table-hover text-center">
      <thead>
        <tr className="bg-dark bg-opacity-25">
          <th style={{color:'white'}}>Author</th>
          <th style={{color:'white'}}>Actions available</th>
        </tr>
      </thead>
      <tbody>
      {props.authors.map((author, index) => {
        return (
        <tr key={index} className={btn_style(index)}>
          <td style={{color: 'magenta'}}>{author.name}</td> 
          <td>
            <button onClick={e => GoToEdit(author._id)} className='btn me-3' style={{backgroundColor: '#bfb6aa'}}> Edit </button>
            <AuthorDelete id={author._id} />
          </td>
        </tr>
        )})
      }
      </tbody>
      </table>
    </div>
  );
}

export default AuthorList;