import React, { useEffect, useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    const res = await fetch("/api/jokes", {
      method: "GET",
    });
    const data = await res.json();
    setJokes(data);
  };
  useEffect(() => {
    getJokes();
  }, [jokes]);

  return (
    <div>
      <h1>Hello this is zaryab</h1>
      <p>Jokes: {jokes.length}</p>
      <ul>
        {jokes.map((joke, i) => {
          return <li key={i}>{joke.joke}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
