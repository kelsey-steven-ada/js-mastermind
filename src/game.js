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
  const guess_map = getFrequencyMap(guess);
  const code_map = getFrequencyMap(code);

  // For each unique letter in code, see if it exists in
  // guess; if so, increase count.
  var count = 0;
  for (const [key, code_value] of Object.entries(code_map)) {
    if (key in guess_map) {
      const guess_value = guess_map[key];
      if (guess_value > code_value) {
        count += code_value;
      } else {
        count += guess_value;
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
  const total_correct = correctPosAndColor(guess, code);
  const wrong_position = colorCount(guess, code) - total_correct;

  return [total_correct, wrong_position];
};

const checkWinOrLose = (guess, code, numGuesses) => {
  if (num_guesses >= 8) {
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
  const formatted_stats = Array(8).fill("");
  for (const [num_guesses, wins] of Object.entries(guess_stats)) {
    formatted_stats[num_guesses - 1] = "X".repeat(wins);
  }

  return formatted_stats;
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
