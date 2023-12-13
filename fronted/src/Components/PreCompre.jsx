import React, { useState } from 'react';

const PreCompre = ({ options, question, userId, len }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [select, setSelect] = useState("")

 const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  const selectedOptionData = options.find((el) => el._id === optionId);

  if (selectedOptionData) {
   setSelect(selectedOptionData.text);
  }
};

  return (
    <div className='mb-4' >
      <h2>
        {len+1}. {question}
      </h2>
      {options?.map((el) => {
        return (
          <div className='flex' key={el._id}>
            <input
            className='ml-3 mr-2'
              type='radio'
              value={el._id}
              checked={selectedOption === el._id}
              onChange={() => handleOptionChange(el._id)}
            />
            <p>{el.text}</p>
          </div>
        );
      })}
      <p > <span className='text-md font-bold' >Selected Option:</span>  <span className='underline' > {select}</span> </p>
    </div>
  );
};

export default PreCompre;
