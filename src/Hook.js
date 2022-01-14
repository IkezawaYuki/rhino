import React, { useState, useEffect } from "react";

function App() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  useEffect(() => {
    console.log(`typing "${val}"`)
  }, [val]);

  useEffect(() => {
    console.log(`save phrase: "${phrase}"`)
  }, [phrase]);

  return (
    <>
      <label>Favorite pharase:</label>
      <input 
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  )
}