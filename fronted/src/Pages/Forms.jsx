import React from "react";
import Comprehension from "../Components/Comprehension";
import ClozeQuestion from "../Components/ClozeQuestion";
import Categorize from "../Components/Categorize";

const Forms = () => {
  return (
    <>
    
      <div className="container w-1/2 m-auto shadow-lg p-3 mt-5 mb-5 pb-8  border-l-4 border-sky-500 ">
        <Comprehension />
        <ClozeQuestion />
        <Categorize/>
        
      </div>
    </>
  );
};

export default Forms;
