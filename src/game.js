const COLORS = ["R", "Y", "G", "B", "I", "V"];

const generateCode = () => {
  const result = [];

  for (var i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * COLORS.length);
    result.push(COLORS[index]);
  }

  return result;
};

const validateGuess = (guess) => {
  if (guess.length !== 4) {
    return false;
  }

  const upperGuess = getUppercasedGuess(guess);
  const validLetters = "RYGVBI";
  for (var letter of upperGuess) {
    if (!validLetters.includes(letter)) {
      return false;
    }
  }

  return true;
};

const getUppercasedGuess = (guess) => {
  return guess.map((char) => char.toUpperCase());
};

const colorCount = (guess, code) => {
  // Create frequency maps of the letters in guess and code
  const guessMap = getFrequencyMap(guess);
  const codeMap = getFrequencyMap(code);

  // For each unique letter in code, see if it exists in
  // guess; if so, increase count.
  var count = 0;
  for (const [key, codeValue] of Object.entries(codeMap)) {
    if (key in guessMap) {
      const guessValue = guessMap[key];
      if (guessValue > codeValue) {
        count += codeValue;
      } else {
        count += guessValue;
      }
    }
  }

  return count;
};

const getFrequencyMap = (letterList) => {
  const freqMap = {};

  for (var i = 0; i < 4; i++) {
    const letter = letterList[i].toUpperCase();
    if (letter in freqMap) {
      freqMap[letter] += 1;
    } else {
      freqMap[letter] = 1;
    }
  }

  return freqMap;
};

const correctPosAndColor = (guess, code) => {
  var count = 0;
  for (var i = 0; i < 4; i++) {
    if (guess[i].toUpperCase() == code[i]) {
      count += 1;
    }
  }

  return count;
};

const checkGuess = (guess, code) => {
  const totalCorrect = correctPosAndColor(guess, code);
  const wrongPosition = colorCount(guess, code) - totalCorrect;

  return [totalCorrect, wrongPosition];
};

const checkWinOrLose = (guess, code, numGuesses) => {
  if (numGuesses >= 8) {
    return false;
  }

  const upperGuess = getUppercasedGuess(guess);
  if (code.join("") === upperGuess.join("")) {
    return true;
  }

  return null;
};

const getWinPercentage = (wins, plays) => {
  return plays > 0 ? Math.floor((wins / plays) * 100) : 0;
};

const formatGuessStats = (guessStats) => {
  const formattedStats = Array(8).fill("");
  for (const [numGuesses, wins] of Object.entries(guessStats)) {
    formattedStats[numGuesses - 1] = "X".repeat(wins);
  }

  return formattedStats;
};

export {
  generateCode,
  validateGuess,
  colorCount,
  correctPosAndColor,
  checkGuess,
  checkWinOrLose,
  getWinPercentage,
  formatGuessStats,
};
