import { generate_code } from "../src/game.js";

// --------------------------test generate_code------------------------------------

describe("Test generate_code function", () => {
  test("Creates a code of length 4", () => {
    // Arrange / Act
    const result = generate_code();

    // Assert
    expect(result.length).toBe(4);
  });

  test("Result is an array", () => {
    // Arrange / Act
    const result = generate_code();

    // Assert
    expect(Array.isArray(result)).toBe(true);
  });

  test("Result uses only valid letters", () => {
    // Arrange
    const validLetters = "RYGVBI";

    // Act
    const result = generate_code();

    // Assert
    for (letter of result) {
      expect(validLetters.includes(letter)).toBe(true);
    }
  });
});
