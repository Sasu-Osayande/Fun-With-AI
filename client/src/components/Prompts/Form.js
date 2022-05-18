import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
// import logo from './logo.svg';
import "./Form.css";
// import { useLocalStorage } from "./useLocalStorage";
import ResponseList from "../Responses/ResponseList"

function Form(props) {
  const [promptInput, setPromptInput] = useState("");
  const [query, setQuery] = useState("");
  // const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("");
  const { storage, setStorage } = props;

  // useEffect(() => {
  //   const info = window.localStorage.getItem('FunWithAIStorage');
  //   if ( info !== null ) setStorage(JSON.parse(info));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('FunWithAIStorage', JSON.stringify(storage));
  // }, [storage]);

  // useEffect(() => {
  //   // storing input promptInput
  //   localStorage.setItem("promptInput", JSON.stringify(promptInput));
  // }, [promptInput]);

  // useEffect(() => {
  //   const promptInput = JSON.parse(localStorage.getItem('promptInput'));
  //   if (promptInput) {
  //    setPromptInput(promptInput);
  //   }
  // }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (query === "") {
      setIsLoading(false);
      setIsError(true);
    }
    localStorage.setItem('promptInput', promptInput);
    localStorage.setItem('query', promptInput ? query : '');
    localStorage.getItem(promptInput)
    // setSearch(query);
    // console.log("Data:", data.prompt)
    // console.log("Answer:", answer)
    // setQuery("");

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
   .then(res => res.json())
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
   })

  //  const answer = {
  //   search_model: "curie", 
  //   model: "curie", 
  //   question: "which puppy is happy?",
  //   documents: [],
  //   examples_context: "In 2017, U.S. life expectancy was 78.6 years.", 
  //   examples: [["What is human life expectancy in the United States?", "78 years."]], 
  //   max_rerank: 10,
  //   max_tokens: 5,
  //   stop: ["\n", "<|endoftext|>"]
  //  }

  //  fetch("https://api.openai.com/v1/answers", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //   },
  //   body: JSON.stringify(answer),
  //  });

  };

  // Check localStorage for any saved prompts and responses on load
  // useEffect(() => {
  //   if (localStorage.getItem("responses")) {
  //     const parsedResponse = JSON.parse(localStorage.getItem("responses"));
  //     setStorage(parsedResponse);
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchInfo = async () => {
  //     if (search) {
  //       setIsLoading(true);
  //       const res = await fetch(`https://api.openai.com/v1/engines/text-curie-001/completions`, {
  //         body: JSON.stringify({
  //           name: search,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         method: "POST",
  //       });
  //       const promptInput = await res.json();
  //       setPromptInput(promptInput);
  //       console.log("Info:", promptInput);
  //       console.log("Response", promptInput.response);
  //       console.log("Query:", query);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchInfo();
  // }, [search]);

  return (
    <div className="Form">
      <div>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          {/* <h1>
            <p>Fun With AI</p>
          </h1> */}
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
                  <ResponseList storage={storage}
                  setStorage={setStorage}
                  query={query} />
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