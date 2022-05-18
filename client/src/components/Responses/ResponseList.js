import React, { useEffect } from "react";

import ResponseListItem from "./ResponseListItem";

function Responses(props) {
  const { storage, setStorage } = props;

  // useEffect(() => {
  //   const info = window.localStorage.getItem('FunWithAIStorage');
  //   if ( info !== null ) setStorage(JSON.parse(info));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('FunWithAIStorage', JSON.stringify(storage));
  // }, [storage]);

  // const returnedValues = props.returnedValues.map((returnedValue) => {
  //   return (
  //     <ResponseListItem
  //       prompt={returnedValue.prompt}
  //       response={returnedValue.response}
  //     />
  //   );
  // });

  useEffect(() => {
    if (localStorage.getItem("savedData")) {
      const savedData = JSON.parse(localStorage.getItem("savedData"));
      setStorage(savedData);
    }
  }, []);

  return (
    <>
      {storage
        ? storage.map((x, index) => {
            return <ResponseListItem key={index} prompt={x.prompt} response={x.response} />;
          })
        : []}
    </>
  );
}

export default Responses;
