import React from "react";
import "./ResponseListItem.css";

function Responses(props) {
  const { prompt, response } = props;

  return (
    <div className="response-container">
      <div className="prompt-value">
        <span className="prompt-heading">
          <b>Prompt: </b>
          </span>
          <div className="prompt">
          {prompt}
          </div>
      </div>
      <div className="prompt-value">
      <span className="response-heading">
        <b>Response: </b>
        </span>
        <div className="response">
        {response}
        </div>
        </div>
    </div>
  );
}

export default Responses;
