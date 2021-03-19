import { useEffect, useState } from "react";
import checkWords from "./checkWords";

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
      <h1>Genius Maker</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          setLetters(tempLetters);
          setChanged(true);
        }}
      >
        <div>
          <label>Required letter</label>
          <input type="text" name="requiredLetter" onChange={handleChange} />
        </div>
        <div>
          <label>letter 2</label>
          <input type="text" name="letter2" onChange={handleChange} />
        </div>
        <div>
          <label>Letter 3</label>
          <input type="text" name="letter3" onChange={handleChange} />
        </div>
        <div>
          <label>Letter 4</label>
          <input type="text" name="letter4" onChange={handleChange} />
        </div>
        <div>
          <label>Letter 5</label>
          <input type="text" name="letter5" onChange={handleChange} />
        </div>
        <div>
          <label>Letter 6</label>
          <input type="text" name="letter6" onChange={handleChange} />
        </div>
        <div>
          <label>Letter 7</label>
          <input type="text" name="letter7" onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
      <ol>
        {words.map(word => (
          <li key={word}>{word}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
