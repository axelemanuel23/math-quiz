import React from 'react';

const QuestionCard = ({ question, options, selectedOption, onSelectOption, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <img src={image} alt="contexto de la pregunta" className="mb-4 max-w-full h-auto" />
      <div>
        {options.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
