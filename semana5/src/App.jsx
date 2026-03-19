import React from 'react';
import Galeria from './Galeria.jsx';
import './App.css';

function App() {
  return (
    // Esta div pode levar o "container" do Bootstrap para dar margens ao site todo
    <div className="">

      {/* Um título principal para a tua página (opcional) */}
      <h1 className="">Galeria de Artistas</h1>

      <Galeria />

    </div>
  );
}

export default App;