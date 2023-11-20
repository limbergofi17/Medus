import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rutas } from './routes';
import './fonts.css';
function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: 'F3F1E9',
          minHeight: '100vh',
        }}
      >
        <Rutas />
      </div>
    </BrowserRouter>
  );
}

export default App;
