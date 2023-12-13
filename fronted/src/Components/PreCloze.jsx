import React from 'react';

const PreCloze = ({ len, blanks, sentence }) => {
  return (
    <div className='mb-3'>
      <h2>
        {len + 1}.{' '}
        {sentence.split(/<u>(.*?)<\/u>/).map((part, index) => (
          index % 2 === 1 ? <div key={index} className='inline-block border-solid border border-black h-6 w-10 mx-1' /> : part
        ))}
      </h2>
      {blanks.map((el, index) => (
        <div className='flex' key={index}>
          {el.options.map((op, i) => (
            <span key={i} className='m-2 bg-sky-500 p-2 text-white'>
              {op.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreCloze;