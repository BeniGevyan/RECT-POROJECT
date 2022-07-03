import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchingData() {
  const [results, setResults] = useState([]);

  const [query,setQuery]=useState('reacthooks')

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        console.log(res);
        setResults(res.data.hits);
      });
  }, [query]);

  return (
    <div className="FetchingData">
      <p>FetchingData</p>
      <input type="text" onChange={(e)=>{setQuery(e.target.value) }} 
     
      />
      <ul>
        {results.map((res) => (
          <li key={res.objectID}>
            <a target="_blank" href={res.url} rel="noreferrer">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
