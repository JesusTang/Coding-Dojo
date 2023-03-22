import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import AuthorInfo from './components/AuthorInfo'
import Edit from './views/Edit'
import Create from './views/Create'
import AuthorDelete from './components/AuthorDelete'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/:id/edit" element={<Edit/>}/>
          <Route path="/:id/delete" element={<AuthorDelete/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
