import React from "react";
import PreCloze from "./PreCloze";

const PreviewAdjust2 = ({ cloze }) => {
  return (
    <div>
      <div className="flex justify-center text-lg font-bold m-4 ">
        {cloze.length > 0 && <div> {cloze[0].questionType} </div>}
      </div>
      {cloze?.map((el, i) => (
        <PreCloze len={i} {...el} key={el._id} />
      ))}
    </div>
  );
};

export default PreviewAdjust2;
