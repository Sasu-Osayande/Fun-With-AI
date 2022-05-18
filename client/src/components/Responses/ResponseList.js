import React, { useEffect } from "react";

import ResponseListItem from "./ResponseListItem";

function Responses(props) {
  const { storage, setStorage } = props;

  useEffect(() => {
    if (localStorage.getItem("inputData")) {
      const inputData = JSON.parse(localStorage.getItem("inputData"));
      setStorage(inputData);
    }
  }, []);

  return (
    <>
      {storage
        ? storage.map((value, index) => {
            return (
              <ResponseListItem
                key={index}
                prompt={value.prompt}
                response={value.response}
              />
            );
          })
        : []}
    </>
  );
}

export default Responses;
