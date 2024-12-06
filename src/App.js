import React from 'react';
import './App.css';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-500 text-white p-6">
        <h1 className="text-3xl font-bold">Cuestionario de Matemáticas</h1>
      </header>
      <main className="container mx-auto p-4">
        <Quiz />
      </main>
    </div>
  );
}

export default App;
