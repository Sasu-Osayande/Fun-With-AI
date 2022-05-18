import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { useLocalStorage } from "./useLocalStorage";
import Form from "./components/Prompts/Form"
// import ResponseList from "./components/Responses/ResponseList"

function App(props) {
  // const [info, setInfo] = useState("");
  // const [promptInput, setPromptInput] = useState("");
  const [query, setQuery] = useState("");
  // const [search, setSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [storage, setStorage] = useState([]);

  // useEffect(() => {
  //   const info = window.localStorage.getItem('FunWithAIStorage');
  //   if ( info !== null ) setStorage(JSON.parse(info));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('FunWithAIStorage', JSON.stringify(storage));
  // }, [storage]);

  // // useEffect(() => {
  // //   // storing input info
  // //   localStorage.setItem("info", JSON.stringify(info));
  // // }, [info]);

  // // useEffect(() => {
  // //   const info = JSON.parse(localStorage.getItem('info'));
  // //   if (info) {
  // //    setInfo(info);
  // //   }
  // // }, []);

  // const data = {
  //   prompt: `${query}`,
  //   temperature: 0.5,
  //   max_tokens: 64,
  //   top_p: 1.0,
  //   frequency_penalty: 0.0,
  //   presence_penalty: 0.0,
  //  };
    
  //  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //   },
  //   body: JSON.stringify(data),
  //  });

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

  // // Check localStorage for any saved prompts and responses on load
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
  //       const info = await res.json();
  //       setInfo(info);
  //       console.log("Info:", info);
  //       console.log("Response", info.response);
  //       console.log("Query:", query);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchInfo();
  // }, [search]);

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('info', info);
  //   localStorage.setItem('query', info ? query : '');
  //   localStorage.getItem(info)
  //   setSearch(query);
  //   console.log("Data:", data.prompt)
  //   console.log("Answer:", answer)
  //   // setQuery("");
  // };

  return (
    <div className="App">
      <div>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          <h1>
            <p>Fun With AI</p>
          </h1>
          {/* <div className="whole-container">
            <div className="form-container"> */}
              <div>
                {/* <div className="subheading">
                  <h3>Enter Prompt</h3>
                </div> */}
                <Form storage={storage}
                  setStorage={setStorage}
                  query={query}
                  setQuery={setQuery} />
              </div>
            {/* </div>
          </div> */}
        </main>
      </div>
    </div>
  );
}

export default App;
