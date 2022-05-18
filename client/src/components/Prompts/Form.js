import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

import ResponseList from "../Responses/ResponseList";

function Form(props) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("");
  const { storage, setStorage } = props;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (query === "") {
      setIsLoading(false);
      setIsError(true);
    }

    const data = {
      prompt: `${query}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    let answer = "";

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => (answer = data.choices[0].text))
      .then(() => {
        setStorage((prev) => {
          const newResponse = [
            { id: uuidv4(), prompt: query, response: answer },
            ...prev,
          ];
          const inputData = JSON.stringify(newResponse);
          localStorage.setItem("inputData", inputData);
          setIsLoading(false);
          setQuery("");
          setValue("");
          return newResponse;
        });
      })
      .then(() => {
        let allStorage = JSON.parse(localStorage.getItem("inputData"));
        return allStorage;
      });
  };

  return (
    <div className="Form">
      <div>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          <div className="whole-container">
            <div className="form-container">
              <div>
                <div className="subheading">
                  <h3>Enter Prompt</h3>
                </div>
                <form onSubmit={onHandleSubmit}>
                  <textarea
                    className="prompt-input"
                    type="text"
                    placeholder="What's on your mind?..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <div>
                    <div className="btn-container">
                      <button type="button" onClick={onHandleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="subheading">
                  <h3>Responses</h3>
                </div>
                {isLoading ? (
                  <div>Loading ...</div>
                ) : (
                  <ResponseList
                    storage={storage}
                    setStorage={setStorage}
                    query={query}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Form;
