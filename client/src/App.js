import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
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
      <div className>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main className>
          <h1 className>
            <p>Fun With AI</p>
          </h1>

          <div className>
            <div className>
              <h3>Enter a Prompt:</h3>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button type="button" onClick={() => setSearch(query)}>
                Submit
              </button>

              <h3>Response:</h3>
              {isLoading ? <div>Loading ...</div> : <span>{data.text}</span>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
