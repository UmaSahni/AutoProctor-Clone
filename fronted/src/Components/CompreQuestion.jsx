import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { FaPlus } from "react-icons/fa";
import { FaGripLines, FaTrash  } from 'react-icons/fa';
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

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedOptions = Array.from(questions[0].options);
    const [reorderedOption] = updatedOptions.splice(result.source.index, 1);
    updatedOptions.splice(result.destination.index, 0, reorderedOption);

    setQuestions((prevQuestions) => [
      { ...prevQuestions[0], options: updatedOptions },
    ]);
  };

  const handleSubmit = () => {
    // Send the questions data to the backend using axios.post
    axios.post(`http://localhost:8080/mcq/add`, {
      userId: 'radha1',
      questionType: 'MCQ',
      question: questions[0].text,
      points: 0,  // You may adjust this based on your requirement
      options: questions[0].options.map((option, index) => ({
        text: option,
        isCorrect: index === questions[0].correct,
      })),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-lg font-bold mb-4">Form Editor</h2>

        {questions.map((question) => (
          <Droppable key={question.id} droppableId="options" type="OPTIONS">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mb-4 flex"
              >
                <div className="flex-1 pr-4">
                  <label className="block mb-2">Question:</label>
                  <textarea
                    value={question.text}
                    onChange={(e) => handleQuestionChange(question.id, 'text', e.target.value)}
                    className="w-1/2 p-2 border"
                  />

                  <label className="block mt-4 mb-2">Options:</label>
                  {question.options.map((option, index) => (
                    <Draggable key={index} draggableId={`option-${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2 flex items-center"
                        >
                          <FaGripLines className='mr-2' />
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <div className="flex-shrink-0 flex flex-col items-end">
                  <button onClick={handleAddQuestion} className="mb-4 bg-blue-500 text-white p-2">
                    <FaPlus />
                  </button>

                  <button onClick={() => handleRemoveQuestion(question.id)} className="mb-4 bg-red-500 text-white p-2">
                   <FaTrash />
                  </button>
                  
                </div>
              </div>
            )}
          </Droppable>
        ))}

        <button className='bg-green-600 pr-3 pl-3' onClick={handleSubmit}>Save</button>
      </div>
    </DragDropContext>
  );
};

export default CompreQuestion;
