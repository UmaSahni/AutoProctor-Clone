import axios from "axios";
import React, { useEffect, useState } from "react";
import PreCompre from "../Components/PreCompre";
import Loader from "../Components/Loader";

const Preview = () => {
  const [comprehension, setComprehenstion] = useState([]);
  const [cloze, setCloze] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8080/mcq/all/radha1`)
      .then((res) => {
        console.log(res.data.data);
        setComprehenstion(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  if (!comprehension.length) {
    return <Loader/>;
  }

  return (
    <div className="container w-1/2 m-auto shadow-lg p-3 mt-5 mb-5  border-l-4 border-violet-500 ">
      <div>
        {comprehension.length > 0 && (
          <div> {comprehension[0].passage} </div>
        )}
      </div>

      <div className="flex justify-center text-lg font-bold m-4 " >
        {comprehension.length > 0 && (
          <div> {comprehension[0].questionType} </div>
        )}
      </div>

      {comprehension.length > 0 &&
        comprehension?.map((el, i) => <PreCompre len={i} {...el} key={el._id} />)}

      
    </div>
  );
};

export default Preview;
