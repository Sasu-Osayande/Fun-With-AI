import React from "react";
import "./ResponseListItem.css";

function Responses(props) {
  const { prompt, response } = props;

  return (
    <div className="response-container">
      <div className="prompt-value">
        <span>
          <b>Prompt: </b>
          {prompt}
        </span>
      </div>
      <span>
        <b>Response: </b>
        {response}
      </span>
    </div>
  );
}

export default Responses;
