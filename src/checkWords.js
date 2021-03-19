import words5 from "./words5.json";

const letterLocation = (line, letter, wordCheck) => {
  let locations = [];
  for (let index = 0; index < line.length; index++) {
    const element = line[index];
    if (element === letter) {
      locations.push(index);
    }
  }
  for (const location of locations) {
    wordCheck[location] = letter;
  }
};

const checkWord = (line, requiredLetter, ...restOfLetters) => {
  const wordCheck = [];
  if (line.indexOf(requiredLetter) === -1) {
    return;
  }
  letterLocation(line, requiredLetter, wordCheck);

  for (let index = 0; index < restOfLetters.length; index++) {
    const letter = restOfLetters[index];
    letterLocation(line, letter, wordCheck);
  }
  if (line === wordCheck.join("")) {
    return line;
  }
};

const checkWords = letters => {
  let matchingWords = [];
  words5.forEach(word => {
    const result = checkWord(
      word,
      letters["requiredLetter"],
      letters["letter2"],
      letters["letter3"],
      letters["letter4"],
      letters["letter5"],
      letters["letter6"],
      letters["letter7"]
    );
    if (result) {
      matchingWords.push(result);
    }
  });
  return matchingWords;
};

export default checkWords;
