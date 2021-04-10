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

const checkWord = (line, letters, requiredLetters) => {
  const wordCheck = [];

  for (let index = 0; index < letters.length; index++) {
    if (requiredLetters[index] && line.indexOf(letters[index]) === -1) {
      return;
    }
    const letter = letters[index];
    letterLocation(line, letter, wordCheck);
  }
  if (line === wordCheck.join("")) {
    return line;
  }
};

const checkWords = (letters, requiredLetters) => {
  let matchingWords = [];
  words5.forEach(word => {
    const result = checkWord(
      word,
      letters,
      requiredLetters
    );
    if (result) {
      matchingWords.push(result);
    }
  });
  return matchingWords;
};

export default checkWords;
