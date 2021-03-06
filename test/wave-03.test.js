import { colorCount, correctPosAndColor, checkGuess } from "../src/game.js";

// --------------------------test colorCount------------------------------------

describe("Test colorCount function", () => {
  test("Returns an integer", () => {
    // Arrange
    const guess = ["R", "R", "G", "B"];
    const code = ["R", "G", "B", "V"];

    // Act
    const result = colorCount(guess, code);

    // Assert
    expect(Number.isInteger(result)).toBe(true);
  });

  test("Returns 2 when 2 values of the guess match the code", () => {
    // Arrange
    const guess = ["R", "I", "G", "B"];
    const code = ["R", "I", "V", "V"];

    // Act
    const result = colorCount(guess, code);

    // Assert
    expect(result).toBe(2);
  });

  test("Returns matches even if they are not at the same index", () => {
    // Arrange
    const guess = ["R", "I", "G", "B"];
    const code = ["V", "V", "R", "I"];

    // Act
    const result = colorCount(guess, code);

    // Assert
    expect(result).toBe(2);
  });

  test("Does not double count letters", () => {
    // Arrange
    const guess = ["R", "R", "G", "B"];
    const code = ["R", "V", "V", "V"];

    // Act
    const result = colorCount(guess, code);

    // Assert
    expect(result).toBe(1);
  });

  test("Returns 0 if there are no matches", () => {
    // Arrange
    const guess = ["R", "B", "V", "V"];
    const code = ["I", "I", "I", "I"];

    // Act
    const result = colorCount(guess, code);

    // Assert
    expect(result).toBe(0);
  });
});

// --------------------------test correctPosAndColor------------------------------------

describe("Test correctPosAndColor function", () => {
  test("Returns an integer", () => {
    // Arrange
    const guess = ["R", "B", "B", "B"];
    const code = ["I", "I", "I", "I"];

    // Act
    const result = correctPosAndColor(guess, code);

    // Assert
    expect(Number.isInteger(result)).toBe(true);
  });

  test("Returns 2 when 2 values match the correct position and color", () => {
    // Arrange
    const guess = ["R", "B", "I", "V"];
    const code = ["R", "B", "G", "G"];

    // Act
    const result = correctPosAndColor(guess, code);

    // Assert
    expect(result).toBe(2);
  });

  test("Returns 0 for correct colors in the wrong position", () => {
    // Arrange
    const guess = ["R", "B", "I", "V"];
    const code = ["I", "V", "R", "B"];

    // Act
    const result = correctPosAndColor(guess, code);

    // Assert
    expect(result).toBe(0);
  });

  test("Does not double count matches for multiple of same color", () => {
    // Arrange
    const guess = ["R", "B", "I", "R"];
    const code = ["R", "V", "V", "V"];

    // Act
    const result = correctPosAndColor(guess, code);

    // Assert
    expect(result).toBe(1);
  });

  test("Returns 0 for no positions & color matches", () => {
    // Arrange
    const guess = ["R", "B", "V", "V"];
    const code = ["I", "I", "I", "I"];

    // Act
    const result = correctPosAndColor(guess, code);

    // Assert
    expect(result).toBe(0);
  });
});

// --------------------------test checkGuess------------------------------------

describe("Test checkGuess function", () => {
  test("Returns the values 4 & 0 for a fully correct guess", () => {
    // Arrange
    const guess = ["R", "B", "V", "V"];
    const code = ["R", "B", "V", "V"];

    // Act
    const result = checkGuess(guess, code);

    // Assert
    expect(result).toStrictEqual([4, 0]);
  });

  test("Returns correct results for a mixed success guess", () => {
    // Arrange
    const guess = ["R", "B", "I", "V"];
    const code = ["R", "Y", "B", "V"];

    // Act
    const result = checkGuess(guess, code);

    // Assert
    expect(result).toStrictEqual([2, 1]);
  });

  test("Returns the values 0 & 0 for a fully incorrect guess", () => {
    // Arrange
    const guess = ["V", "V", "V", "V"];
    const code = ["R", "R", "R", "R"];

    // Act
    const result = checkGuess(guess, code);

    // Assert
    expect(result).toStrictEqual([0, 0]);
  });
});
