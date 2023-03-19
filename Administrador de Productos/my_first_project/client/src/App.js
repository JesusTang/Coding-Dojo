import './App.css';
import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductInfo from './components/ProductInfo'
import Edit from './views/Edit'
import ProductDelete from './components/ProductDelete'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" element={<ProductInfo/>}/>
          <Route path="/:id/edit" element={<Edit/>}/>
          <Route path="/:id/delete" element={<ProductDelete/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
