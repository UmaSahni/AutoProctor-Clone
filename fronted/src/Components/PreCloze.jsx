import React from 'react'

const PreCloze = ({len, blanks, sentence}) => {
    // console.log(blanks[0].options)
  return (
    <div className='mb-3' >
        <h2>{len+1}. {sentence}</h2>
        {
            blanks.map((el)=>{
                console.log(el)
                return <div className='flex ' >
                   {el.options.map((op, )=>{
                    return <span className='m-2 bg-sky-500 p-2 text-white' > {op.text} </span>
                   })}
                </div>
            })
        }
    </div>
  )
}

export default PreCloze