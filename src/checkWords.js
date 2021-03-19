import words5 from "./words5.json"


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

const checkWords = () => {
  let matchingWords = [];
  words5.forEach((word) => {
    const result = checkWord(word, "l", "w", "r", "i", "n", "k", "e");
    if (result) {
      matchingWords.push(result);
    }
  });
  console.log("🚀 ~ file: checkWords.js ~ line 41 ~ words5.forEach ~ matchingWords", matchingWords);
  return matchingWords;  
}

export default checkWords;
