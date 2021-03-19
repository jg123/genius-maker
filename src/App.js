import { useEffect, useState } from "react";
import checkWords from "./checkWords";

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    setWords(checkWords());
  }, []);
  return (
    <>
      <h1>Genius Maker</h1>
      <ol>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
