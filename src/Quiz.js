import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const questions = [
    {
      question: '¿Cuál es la distancia aproximada desde la línea de partida hasta el comienzo del tramo recto más largo de la pista?',
      options: ['0.5 km', '1.5 km', '2.3 km', '2.6 km'],
      answer: '1.5 km',
      image: 'https://localhost:3000/public/images/question1.png' // URL de ejemplo de una imagen opcional
    },
    {
      question: '¿Dónde se registró la velocidad más baja durante la segunda vuelta?',
      options: ['En la línea de partida.', 'Aproximadamente en el km 0.8.', 'Aproximadamente en el km 1.3.', 'A mitad del recorrido.'],
      answer: 'Aproximadamente en el km 0.8.',
      image: 'https://example.com/image1.png' // URL de ejemplo de una imagen opcional
    },
    { 
        question: '¿Sobre cuál de estas pistas se desplazó el auto para producir el gráfico de velocidad mostrado anteriormente?', 
        options: ['Pista A', 'Pista B', 'Pista C', 'Pista D', 'Pista E'], 
        answer: 'Pista B', // Suponiendo que la respuesta correcta sea Pista B 
        image: '/images/your_image_name.jpeg' // Ruta relativa a la imagen en la carpeta public/images
    },
    { 
        question: 'Según el diagrama, ¿cuántos manzanos y pinos hay cuando n = 2?', 
        options: ['4 manzanos, 12 pinos', '5 manzanos, 8 pinos', '4 manzanos, 16 pinos', '6 manzanos, 10 pinos'], 
        answer: '4 manzanos, 16 pinos', 
        image: '/images/diagram.png' // Asegúrate de que esta ruta es correcta 
    },
    {
        question: 'Completa la tabla: ¿Cuántos manzanos hay cuando n = 2?',
        options: ['1', '4', '9', '16'],
        answer: '4',
        image: '/images/diagram.png' // Asegúrate de que esta ruta es correcta
      },
      {
        question: '¿Qué fórmula puedes usar para calcular el número de manzanos según el esquema descrito?',
        options: ['n^2', '2n', 'n^3', '4n'],
        answer: 'n^2',
        image: '/images/diagram.png' // Asegúrate de que esta ruta es correcta
      },
      {
        question: '¿Qué fórmula puedes usar para calcular el número de pinos según el esquema descrito?',
        options: ['4n', '2n', '8n', 'n^3'],
        answer: '8n',
        image: '/images/diagram.png' // Asegúrate de que esta ruta es correcta
      },
      {
        question: 'Hay un valor de n para el cual el número de manzanos es igual al número de pinos. ¿Cuál es ese valor?',
        options: ['n = 2', 'n = 3', 'n = 4', 'n = 8'],
        answer: 'n = 8',
        image: '/images/diagram.png' // Asegúrate de que esta ruta es correcta
      }
  ];


const Quiz = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (question, option) => {
    setSelectedOptions(prev => ({ ...prev, [question]: option }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          question={q.question}
          options={q.options}
          selectedOption={selectedOptions[q.question]}
          onSelectOption={option => handleSelectOption(q.question, option)}
        />
      ))}
      <button 
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Enviar a corregir
      </button>
      {showResults && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{q.question}</p>
              <p>Tu respuesta: {selectedOptions[q.question]}</p>
              <p>Respuesta correcta: {q.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
