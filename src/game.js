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
  // Add your code here
};

const correctPosAndColor = (guess, code) => {
  // Add your code here
};

const checkGuess = (guess, code) => {
  // Add your code here
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
  // Add your code here
};

const formatGuessStats = (guessStats) => {
  // Add your code here
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
