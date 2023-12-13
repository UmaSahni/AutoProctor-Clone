import React from "react";
import PreCompre from "./PreCompre";

const PreviewAdjest1 = ({ comprehension }) => {
  return (
    <>
      <div>
        {comprehension.length > 0 && <div> {comprehension[0].passage} </div>}
      </div>

      <div className="flex justify-center text-lg font-bold m-4 ">
        {comprehension.length > 0 && (
          <div> {comprehension[0].questionType} </div>
        )}
      </div>

      {comprehension.length > 0 &&
        comprehension?.map((el, i) => (
          <PreCompre len={i} {...el} key={el._id} />
        ))}
    </>
  );
};

export default PreviewAdjest1;
