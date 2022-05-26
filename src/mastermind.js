import * as readline from "node:readline";
import {
  generateCode,
  validateGuess,
  checkGuess,
  checkWinOrLose,
  getWinPercentage,
  formatGuessStats,
} from "./game.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      resolve(ans);
    })
  );
};

const closeInputStream = () => {
  rl.close();
};

// These functions allow you to print a string s in the stated colors.
// Using them is NOT required
const printRed = (s) => {
  return "\x1b[31m" + s + "\x1b[0m";
};

const printYellow = (s) => {
  return "\x1b[33m" + s + "\x1b[0m";
};

const printGreen = (s) => {
  return "\x1b[32m" + s + "\x1b[0m";
};

const printBlue = (s) => {
  return "\x1b[36m" + s + "\x1b[0m";
};

const printIndigo = (s) => {
  return "\x1b[34m" + s + "\x1b[0m";
};

const printViolet = (s) => {
  return "\x1b[35m" + s + "\x1b[0m";
};

const mastermind = async () => {
  // Implement the game loop here
};

export { mastermind, askQuestion, closeInputStream };
