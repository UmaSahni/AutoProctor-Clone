import React from "react";

const Loader = () => {
  return (
    <div className="container w-1/2 m-auto shadow-lg p-3 mt-5 mb-5  border-l-4 border-sky-500 ">
      <dotlottie-player
        src="https://lottie.host/95469f6b-2e7b-4b4a-98d9-dcf6f7b3a9ac/vFNTFcNYce.json"
        background="transparent"
        speed="1"
        style={{ width: "full", height: "300px", padding: "4px" }}
        loop
        autoplay
      ></dotlottie-player>
      <p className="text-base leading-6 text-gray-700 italic my-4">
        If you are currently seeing this loader for very longer duration, it
        may be because you have not save questions in the editor.
      </p>
    </div>
  );
};

export default Loader;
