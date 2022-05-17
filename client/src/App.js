import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [data, setData] = useState({ text: "" }, () => {
    // getting stored value
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // storing input data
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
        console.log("Data:", data);
        console.log("Query:", query);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery("");

    // const query = this.state.query;
    // this.props.onSearchTermChange(query);
    // setSearch({query: ""});
  };

  return (
    <div className="App">
      <div>
        <title>Fun With AI</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          <h1>
            <p>Fun With AI</p>
          </h1>
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
                  <div className="response-container">
                    <div className="prompt-value">
                      <b>Prompt</b>
                      <span>hey</span>
                    </div>
                    <span>{data.response}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
