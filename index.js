import jest from "jest";
import { mastermind } from "./src/mastermind.js";

var user_input = "";

while (user_input !== "p" && user_input !== "t") {
  user_input = prompt("Please enter p to play or t to test => ");

  if (user_input === "p") {
    mastermind();
  } else {
    jest.run();
  }
}
