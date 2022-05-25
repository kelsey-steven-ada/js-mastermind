import { validate_guess, check_win_or_lose } from "../src/game.js";

describe("Test validate_guess function", () => {
  test("Returns false if length greater than 4", () => {
    // Arrange
    const guess = ["R", "R", "R", "R", "R"];

    // Act
    const result = validate_guess(guess);

    // Assert
    expect(result).toEqual(false);
  });

  test("Returns true if letters and length valid", () => {
    // Arrange
    const guess = ["R", "Y", "G", "I"];

    // Act
    const result = validate_guess(guess);

    // Assert
    expect(result).toEqual(true);
  });

  test("Returns true for repeated valid letters and valid length", () => {
    // Arrange
    const guess = ["B", "B", "V", "V"];

    // Act
    const result = validate_guess(guess);

    // Assert
    expect(result).toEqual(true);
  });

  test("Returns false for invalid letters", () => {
    // Arrange
    const guess = ["R", "O", "Y", "I"];

    // Act
    const result = validate_guess(guess);

    // Assert
    expect(result).toEqual(false);
  });

  test("Returns true for lowercase valid letters", () => {
    // Arrange
    const guess = ["B", "b", "v", "V"];

    // Act
    const result = validate_guess(guess);

    // Assert
    expect(result).toEqual(true);
  });
});

describe("Test check_win_or_lose function", () => {
  test("Returns true if both win conditions met", () => {
    // Arrange
    const guess = ["R", "B", "B", "V"];
    const code = ["R", "B", "B", "V"];
    const num_guesses = 3;

    // Act
    const result = check_win_or_lose(guess, code, num_guesses);

    // Assert
    expect(result).toEqual(true);
  });

  test("Returns false if max guesses exceeded", () => {
    // Arrange
    const guess = ["R", "B", "B", "V"];
    const code = ["R", "B", "B", "V"];
    const num_guesses = 9;

    // Act
    const result = check_win_or_lose(guess, code, num_guesses);

    // Assert
    expect(result).toEqual(false);
  });

  test("Returns none if game is ongoing", () => {
    // Arrange
    const guess = ["R", "B", "B", "V"];
    const code = ["R", "B", "B", "I"];
    const num_guesses = 2;

    // Act
    const result = check_win_or_lose(guess, code, num_guesses);

    // Assert
    expect(result).toEqual(null);
  });
});
