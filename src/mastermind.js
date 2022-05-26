import {
  generateCode,
  validateGuess,
  colorCount,
  correctPosAndColor,
  checkGuess,
  checkWinOrLose,
  getWinPercentage,
  formatGuessStats,
} from "game.js";

// These functions allow you to print a string s in the stated colors.
// Using them is NOT required
const printRed = (s) => {
  return "\033[31m" + s + "\033[0m";
};

const printYellow = (s) => {
  return "\033[33m" + s + "\033[0m";
};

const printGreen = (s) => {
  return "\033[32m" + s + "\033[0m";
};

const printBlue = (s) => {
  return "\033[36m" + s + "\033[0m";
};

const printIndigo = (s) => {
  return "\033[34m" + s + "\033[0m";
};

const printViolet = (s) => {
  return "\033[35m" + s + "\033[0m";
};

const mastermind = () => {
  // Implement the game loop here
};

export { mastermind };
