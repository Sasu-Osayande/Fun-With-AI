import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8080/openai`, {
          body: JSON.stringify({
            name: search,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

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
            <div>
              <h3>Enter Prompt</h3>
              <input
              className="prompt-input"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button type="button" onClick={() => setSearch(query)}>
                Submit
              </button>

              <h3>Responses</h3>
              {isLoading ? <div>Loading ...</div> : <span>{data.response}</span>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
