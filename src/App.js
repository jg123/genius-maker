import { useEffect, useState } from "react";
import checkWords from "./checkWords";

import "./App.css";

function App() {
  const [tempLetters, setTempLetters] = useState({});
  const [letters, setLetters] = useState([]);
  const [changed, setChanged] = useState(false);
  const [words, setWords] = useState([]);
  useEffect(() => {
    if (changed) {
      setWords(checkWords(letters));
    }
    setChanged(false);
  }, [letters, changed]);

  const handleChange = event => {
    setTempLetters({
      ...tempLetters,
      ...{ [event.target.name]: event.target.value }
    });
  };

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          setLetters(tempLetters);
          setChanged(true);
        }}
        >
        <h1>Genius Maker</h1>
        <div class="letter-row">
          <label class="text-label" for="requiredLetter">Required letter</label>
          <input type="text" name="requiredLetter" id="requiredLetter" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter2">letter 2</label>
          <input type="text" name="letter2" id="letter2" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter3">Letter 3</label>
          <input type="text" name="letter3" id="letter3" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter4">Letter 4</label>
          <input type="text" name="letter4" id="letter4" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter5">Letter 5</label>
          <input type="text" name="letter5" id="letter5" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter6">Letter 6</label>
          <input type="text" name="letter6" id="letter6" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <div class="letter-row">
          <label class="text-label" for="letter7">Letter 7</label>
          <input type="text" name="letter7" id="letter7" onChange={handleChange} class="text-input" autoCapitalize="off" />
        </div>
        <input type="submit" />
      </form>
      <h2>Results:</h2>
      <ol>
        {words.map(word => (
          <li key={word}>{word}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
