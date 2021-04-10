import { useEffect, useState } from "react";
import checkWords from "./checkWords";

import "./App.css";

function App() {
  const [numberOfletters, setNumberOfLetters] = useState(7);
  const [tempLetters, setTempLetters] = useState(
    Array.from({ length: numberOfletters }).fill("")
  );
  const [letters, setLetters] = useState(
    Array.from({ length: numberOfletters }).fill("")
  );
  const [requiredLetters, setRequiredLetters] = useState([
    true,
    ...Array.from({ length: numberOfletters - 1 }).fill(false)
  ]);
  const [changed, setChanged] = useState(false);
  const [toggleRequired, setToggleRequired] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (changed) {
      setWords(checkWords(letters, requiredLetters));
    }
    setChanged(false);
  }, [letters, requiredLetters, changed]);

  const handleLetterChange = (event, index) => {
    setTempLetters(tempLetters => [
      ...tempLetters.slice(0, index),
      event.target.value,
      ...tempLetters.slice(index + 1)
    ]);
  };

  const handleRequiredLetterChange = (event, index) => {
    setRequiredLetters(currentRequiredLetters => [
      ...currentRequiredLetters.slice(0, index),
      event.target.checked,
      ...currentRequiredLetters.slice(index + 1)
    ]);
  };

  let Rows = [];
  for (let index = 0; index < numberOfletters; index++) {
    Rows.push(
      <div className="letter-row" key={index}>
        <label className="text-label" htmlFor={`letter${index}`}>
          Letter {index + 1}
        </label>
        <input
          type="text"
          name={`letter${index}`}
          id={`letter${index}`}
          onChange={event => handleLetterChange(event, index)}
          className="text-input"
          autoCapitalize="off"
        />
        <input
          className="required-checkbox"
          type="checkbox"
          onChange={event => handleRequiredLetterChange(event, index)}
          checked={requiredLetters[index]}
          id={`letter${index}required`}
          name={`letter${index}required`}
        />
        <label className="required-label" htmlFor={`letter${index}required`}>
          required
        </label>
      </div>
    );
  }

  return (
    <>
      <h1>Genius Maker</h1>
      <h4>
        Add/remove rows:
        <button
          className="add-remove-button"
          onClick={() => {
            setTempLetters([...tempLetters, ""]);
            setLetters([...letters, ""]);
            setRequiredLetters([...requiredLetters, false]);
            setNumberOfLetters(numberOfletters + 1);
          }}
        >
          Add
        </button>
        <button
          className="add-remove-button"
          onClick={() => {
            if (numberOfletters < 6) {
              return;
            }
            setTempLetters(tempLetters.slice(0, tempLetters.length - 1));
            setLetters(letters.slice(0, letters.length - 1));
            setRequiredLetters(
              requiredLetters.slice(0, requiredLetters.length - 1)
            );
            setNumberOfLetters(numberOfletters - 1);
          }}
        >
          Remove
        </button>
      </h4>
      <h4 className="toggle-row">
        Toggle required:
        <button
          className="add-remove-button"
          onClick={() => {
            setRequiredLetters(
              Array.from({ length: numberOfletters }).fill(!!toggleRequired)
            );
            setToggleRequired(!toggleRequired);
          }}
        >
          Toggle
        </button>
      </h4>
      <form
        onSubmit={event => {
          event.preventDefault();
          setLetters(tempLetters);
          setChanged(true);
        }}
      >
        {Rows}
        <input className="submit-button" type="submit" />
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
