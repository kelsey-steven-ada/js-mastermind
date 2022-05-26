import jest from "jest";
import { mastermind, askQuestion, closeInputStream } from "./src/mastermind.js";

const playGame = async () => {
  var userInput = "";
  while (userInput !== "p" && userInput !== "t") {
    userInput = await askQuestion("Please enter p to play or t to test => ");

    if (userInput === "p") {
      mastermind();
    } else if (userInput === "t") {
      jest.run();
    }
  }

  closeInputStream();
};

playGame();
