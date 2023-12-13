import { FaPlus, FaGripLines, FaTrash } from "react-icons/fa";
import { ImUnderline } from "react-icons/im";
import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import axios from "axios";

const ClozeForm = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      options: ["", "", "", ""],
      underlinedWords: [],
      selectedOption: -1,
    },
  ]);
  const [format, setFormat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const storedUserId = sessionStorage.getItem("userId");

  const handleTextChange = (questionId, e) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, text: e.target.value } : q
      )
    );
  };

  const handleOptionChange = (questionId, index, e) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, i) =>
                i === index ? e.target.value : opt
              ),
            }
          : q
      )
    );
  };

  const handleSelectionChange = (questionId, e) => {
    const selectedText = window.getSelection().toString().trim();
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? { ...q, underlinedWords: [selectedText], selectedOption: -1 }
          : q
      )
    );
  };

  const handleUnderline = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => {
        if (q.id === questionId) {
          const nextOptionIndex = q.underlinedWords.length;
          const updatedText = q.text.replace(
            new RegExp(
              q.underlinedWords.map((word) => `\\b${word}\\b`).join("|"),
              "g"
            ),
            (match) => `<u>${match}</u>`
          );

          return {
            ...q,
            text: updatedText,
            options: q.options.map((opt, i) =>
              i === nextOptionIndex
                ? q.underlinedWords.join(" ")
                : i === 0
                ? opt
                : q.options[i - 1]
            ),
            underlinedWords: [],
            selectedOption: -1,
          };
        }
        return q;
      })
    );
  };

  const handleAddQuestion = () => {
    const newQuestionId = questions.length + 1;
    setQuestions([
      ...questions,
      {
        id: newQuestionId,
        text: "",
        options: ["", "", "", ""],
        underlinedWords: [],
        selectedOption: -1,
      },
    ]);
  };

  const handleRemoveQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.id !== questionId)
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const updatedOptions = [...questions[0].options];
    const [removed] = updatedOptions.splice(source.index, 1);
    updatedOptions.splice(destination.index, 0, removed);

    setQuestions((prevQuestions) => [
      { ...prevQuestions[0], options: updatedOptions },
    ]);
  };

  useEffect(() => {
    // Format the questions for the backend and update format state
    const formattedQuestions = questions.map(
      ({ id, text, options, underlinedWords, selectedOption }) => {
        const index =
          underlinedWords.length > 0 ? options.indexOf(underlinedWords[0]) : -1;
        const blank = {
          index,
          text: underlinedWords, // Set a default value for text if it's undefined
          options: options.map((option, i) => ({
            text: option,
            isCorrect: i === selectedOption,
          })),
        };

        return {
          userId: storedUserId,
          sentence: text,
          blanks: [blank],
        };
      }
    );
    setFormat(formattedQuestions);
  }, [questions]);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(`http://localhost:8080/cloze/add`, format)
      .then((response) => {
        setIsLoading(false);
        console.log("Questions sent successfully", response);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error("Error sending questions to the backend", error);
      });
  };

  return (
    <>
      <h2 className="text-lg font-bold m-4 mr-0">Cloze Editor</h2>
      <div className="container mx-auto mt-8 p-4">
        <DragDropContext onDragEnd={handleDragEnd}>
          {questions.map((question, index) => (
            <Droppable
              key={question.id}
              droppableId={`question-${question.id}`}
              type="OPTIONS"
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="mb-4 flex"
                >
                  <div className="flex-1 pr-4">
                    <label
                      htmlFor={`text-${question.id}`}
                      className="block text-sm font-medium text-gray-600"
                    >
                      Question {index + 1}:
                    </label>
                    <div className="mb-2">
                      <textarea
                        id={`text-${question.id}`}
                        name={`text-${question.id}`}
                        rows="1"
                        value={question.text}
                        onChange={(e) => handleTextChange(question.id, e)}
                        onSelect={(e) => handleSelectionChange(question.id, e)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"
                      />
                    </div>

                    <label className="block text-sm font-medium text-gray-600">
                      Options:
                    </label>
                    {question.options.map((option, index) => (
                      <Draggable
                        key={index}
                        draggableId={`option-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2 flex items-center"
                          >
                            <FaGripLines className="mr-2" />
                            <input
                              type="text"
                              value={option}
                              onChange={(e) =>
                                handleOptionChange(question.id, index, e)
                              }
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
                    <button
                      type="button"
                      onClick={() => handleUnderline(question.id)}
                      className="mb-4 bg-green-500 text-white p-2"
                      disabled={!question.underlinedWords.length}
                    >
                      <ImUnderline />
                    </button>

                    <div>
                      <button
                        type="button"
                        onClick={handleAddQuestion}
                        className="mb-4 bg-blue-500 text-white p-2"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveQuestion(question.id)}
                      className="mb-4 bg-red-500 text-white p-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
        <button className="bg-green-600 pr-3 pl-3" onClick={handleSubmit}>
          {isLoading ? "loding.." : "save"} {" "}
          {isError && "An error occurred"}
        </button>
      </div>
    </>
  );
};

export default ClozeForm;
