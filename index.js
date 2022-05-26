import jest from "jest";
import { mastermind, askQuestion } from "./src/mastermind.js";

var userInput = "";
while (userInput !== "p" && userInput !== "t") {
  userInput = await askQuestion("Please enter p to play or t to test => ");

  if (userInput === "p") {
    mastermind();
  } else if (userInput === "t") {
    jest.run();
  }
}
