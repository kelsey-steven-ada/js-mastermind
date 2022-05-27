import jest from "jest";
import { mastermind } from "./src/mastermind.js";
import promptSync from "prompt-sync"

const playGame = () => {
  const prompt = promptSync();
  let userInput = "";
  while (userInput !== "p" && userInput !== "t") {
    userInput = prompt("Please enter p to play or t to test => ");

    if (userInput === "p") {
      mastermind();
    } else if (userInput === "t") {
      jest.run();
    }
  }
};

playGame();
