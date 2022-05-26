import { generateCode } from "../src/game.js";

// --------------------------test generateCode------------------------------------

describe("Test generateCode function", () => {
  test("Creates a code of length 4", () => {
    // Arrange / Act
    const result = generateCode();

    // Assert
    expect(result.length).toBe(4);
  });

  test("Result is an array", () => {
    // Arrange / Act
    const result = generateCode();

    // Assert
    expect(Array.isArray(result)).toBe(true);
  });

  test("Result uses only valid letters", () => {
    // Arrange
    const validLetters = "RYGVBI";

    // Act
    const result = generateCode();

    // Assert
    for (var letter of result) {
      expect(validLetters.includes(letter)).toBe(true);
    }
  });
});
