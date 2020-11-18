import React, { useEffect, useState } from "react";
import wikipedia from "../apis/wikipedia";

function Search() {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    async function search() {
      const { data } = await wikipedia.get("", {
        params: {
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    }
    search();
  }, [debouncedTerm]);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const renderedResults = results.map((result) => (
    <div style={{ padding: "10px" }} className="item" key={result.title}>
      <div className="right floated content">
        <a
          className="ui button"
          rel="noreferrer"
          target="_blank"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    </div>
  ));

  return (
    <div className="ui segment container">
      <form onSubmit={(e) => e.preventDefault()} className="ui  form">
        <div className="field">
          <label>Search</label>
          <input onChange={onInputChange} type="text" value={term} />
        </div>
      </form>
      <div style={{ marginTop: "50px" }} className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
