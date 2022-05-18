import { useState } from "react";
import "./App.css";

import Form from "./components/Prompts/Form";

function App(props) {
  const [query, setQuery] = useState("");
  const [storage, setStorage] = useState([]);

  return (
    <div className="App">
      <div>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          <h1>
            <p>Fun With AI</p>
          </h1>
          <div>
            <Form
              storage={storage}
              setStorage={setStorage}
              query={query}
              setQuery={setQuery}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
