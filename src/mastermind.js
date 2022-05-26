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
    rl.question(query, (answer) => {
      resolve(answer);
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
  var plays = 0;
  var wins = 0;
  const guessStats = {};
  var continuePlaying = true;

  while (continuePlaying) {
    plays += 1;
    const userGuessCount = await gameLoop();

    if (userGuessCount < 9) {
      wins += 1;
      if (userGuessCount in guessStats) {
        guessStats[userGuessCount] += 1;
      } else {
        guessStats[userGuessCount] = 1;
      }
    }

    console.log("Game Stats:");
    console.log(`Total Games: ${plays}`);
    console.log(`Win percent: ${getWinPercentage(wins, plays)}`);
    console.log("Win Distribution:");

    const formattedWinStats = formatGuessStats(guessStats);
    for (var i = 0; i < 8; i++) {
      console.log(`${i + 1}: ${formattedWinStats[i]}`);
    }
    console.log("");

    const playAgain = await askQuestion(
      "Would you like to play again? (y/n): "
    );
    continuePlaying = playAgain === "y";
  }
};

const gameLoop = async () => {
  console.log("Generating a 4-letter code...");
  const code = generateCode();

  console.log(code);

  console.log("Guess the code! Each character in the code is");
  console.log("one of the following letters: R, Y, G, B, I, V");
  console.log("");

  var numGuesses = 0;
  while (numGuesses <= 8) {
    numGuesses += 1;
    const guess = await getValidGuess();

    if (checkWinOrLose(guess, code, numGuesses)) {
      console.log("You won! You guessed the code 🎉");
      return numGuesses;
    }

    const guessInfo = checkGuess(guess, code);
    console.log(`Total colors in the correct locations: ${guessInfo[0]}`);
    console.log(`Total correct colors in the wrong locations: ${guessInfo[1]}`);
    console.log("");
  }

  console.log(`You ran out of guesses. The code was ${code}!`);
  return numGuesses;
};

const getValidGuess = async () => {
  var userInput = await askQuestion("Enter a 4 letter guess: ");
  var inputAsArray = userInput.split("");
  while (!validateGuess(inputAsArray)) {
    console.log(`The guess "${userInput}" was invalid`);
    console.log("Please enter a new guess that is 4 letters long,");
    userInput = await askQuestion(
      "using only the letters R, Y, G, B, I, and V: "
    );

    inputAsArray = userInput.split("");
  }

  return inputAsArray;
};

export { mastermind, askQuestion, closeInputStream };
