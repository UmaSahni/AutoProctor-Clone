import axios from "axios";
import React, { useEffect, useState } from "react";
import PreCompre from "../Components/PreCompre";
import Loader from "../Components/Loader";
import PreviewAdjest1 from "../Components/PreviewAdjust1";
import PreviewAdjust2 from "../Components/PreviewAdjust2";

const Preview = () => {
  const [comprehension, setComprehenstion] = useState([]);
  const [cloze, setCloze] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8080/mcq/all/radha1`)
      .then((res) => {
        // console.log(res.data.data);
        // setComprehenstion(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    axios.get(`http://localhost:8080/cloze/all/radha1`)
    .then((res)=>{
      console.log(res.data.data)
      setCloze(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  

  if (!comprehension.length && !cloze.length ) {
    return <Loader/>;
  }
  
  return (
    <div className="container w-1/2 m-auto shadow-lg p-3 mt-5 mb-5  border-l-4 border-violet-500 ">
      {comprehension.length > 0 && <PreviewAdjest1 comprehension={comprehension} /> }
      {cloze.length > 0 && <PreviewAdjust2 cloze={cloze} />}
    </div>
  );
};

export default Preview;
