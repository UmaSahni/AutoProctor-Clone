import React, { useState } from 'react';

const CompreQuestion = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: '', options: ['', '', '', ''], correct: 0 },
  ]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, text: '', options: ['', '', '', ''], correct: 0 }]);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleQuestionChange = (id, field, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleOptionChange = (questionId, index, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, i) => (i === index ? value : opt)),
              correct: index,
            }
          : q
      )
    );
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-lg font-bold mb-4">Form Editor</h2>

      {questions.map((question) => (
        <div key={question.id} className="mb-4 flex">
          <div className="flex-1 pr-4">
            <label className="block mb-2">Question:</label>
            <textarea
              value={question.text}
              onChange={(e) => handleQuestionChange(question.id, 'text', e.target.value)}
              className="w-1/2 p-2 border"
            />

            <label className="block mt-4 mb-2">Options:</label>
            {question.options.map((option, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="radio"
                  name={`correct-answer-${question.id}`}
                  checked={question.correct === index}
                  onChange={() => handleOptionChange(question.id, index, option)}
                  className="mr-2"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="w-1/2 p-2 border"
                />
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex flex-col items-end">
            <button onClick={() => handleRemoveQuestion(question.id)} className="mb-4 bg-red-500 text-white p-2">
              Remove Question
            </button>
            <button onClick={handleAddQuestion} className="bg-blue-500 text-white p-2">
              Add Question
            </button>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default CompreQuestion;
