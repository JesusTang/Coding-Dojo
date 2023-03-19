import './App.css';
import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductInfo from './views/ProductInfo'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" element={<ProductInfo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
