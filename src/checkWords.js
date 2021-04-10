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

const checkWord = (line, letters, requiredLetters, matchLength) => {
  const wordCheck = [];

  for (let index = 0; index < letters.length; index++) {
    if (requiredLetters[index] && line.indexOf(letters[index]) === -1) {
      return;
    }
    const letter = letters[index];
    letterLocation(line, letter, wordCheck);
  }
  const finalWord = wordCheck.join("");
  if (line === finalWord) {
    if (matchLength) {
      if (line.length === letters.length) {
        return line;
      }
    } else {
      return line;
    }
  }
};

const checkWords = (letters, requiredLetters, matchLength) => {
  let matchingWords = [];
  words5.forEach(word => {
    const result = checkWord(word, letters, requiredLetters, matchLength);
    if (result) {
      matchingWords.push(result);
    }
  });
  return matchingWords;
};

export default checkWords;
