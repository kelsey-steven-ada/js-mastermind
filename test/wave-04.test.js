import { getWinPercentage, formatGuessStats } from "../src/game.js";

// --------------------------test getWinPercentage------------------------------------

describe("Test getWinPercentage function", () => {
  test("Returns an integer", () => {
    // Arrange
    const wins = 1;
    const plays = 15;

    // Act
    const result = getWinPercentage(wins, plays);

    // Assert
    expect(Number.isInteger(result)).toBe(true);
  });

  test("Returns 0 if no games played", () => {
    // Arrange
    const wins = 0;
    const plays = 0;

    // Act
    const result = getWinPercentage(wins, plays);

    // Assert
    expect(result).toBe(0);
  });

  test("Returns 0 if number of overall games is 0", () => {
    // Arrange
    const wins = 4;
    const plays = 0;

    // Act
    const result = getWinPercentage(wins, plays);

    // Assert
    expect(result).toBe(0);
  });

  test("Returns exact percentage when is a whole number", () => {
    // Arrange
    const wins = 3;
    const plays = 4;

    // Act
    const result = getWinPercentage(wins, plays);

    // Assert
    expect(result).toBe(75);
  });

  test("Rounds down when percentage would be a fraction", () => {
    // Arrange
    const wins = 1;
    const plays = 15;

    // Act
    const result = getWinPercentage(wins, plays);

    // Assert
    expect(result).toBe(6);
  });
});

// --------------------------test formatGuessStats------------------------------------

describe("Test formatGuessStats function", () => {
  test("Format stats when there have been no games", () => {
    // Arrange
    const guess_stats = {};

    // Act
    const result = formatGuessStats(guess_stats);

    // Assert
    expect(result.length).toBe(8);
    for (var statString of result) {
      expect(statString).toBe("");
    }
  });

  test("Properly formats stats for a single pair", () => {
    // Arrange
    const guess_stats = { 1: 4 };

    // Act
    const result = formatGuessStats(guess_stats);

    // Assert
    expect(result.length).toBe(8);
    for (var i = 1; i < result.length; i++) {
      expect(result[i]).toBe("");
    }

    const firstElement = result[0];
    expect(firstElement.length).toBe(4);

    const firstChar = firstElement.charAt(0);
    for (var character of firstElement) {
      expect(character).toBe(firstChar);
    }
  });

  test("Properly formats stats for all pairs", () => {
    // Arrange
    const guess_stats = {
      1: 4,
      2: 3,
      3: 4,
      4: 2,
      5: 6,
      6: 1,
      7: 1,
      8: 3,
    };

    // Act
    const result = formatGuessStats(guess_stats);

    // Assert
    expect(result.length).toBe(8);
    expect(result[0].length).toBe(4);
    expect(result[1].length).toBe(3);
    expect(result[2].length).toBe(4);
    expect(result[3].length).toBe(2);
    expect(result[4].length).toBe(6);
    expect(result[5].length).toBe(1);
    expect(result[6].length).toBe(1);
    expect(result[7].length).toBe(3);

    const firstChar = result[0].charAt(0);
    for (var statString of result) {
      for (var character of statString) {
        expect(character).toBe(firstChar);
      }
    }
  });
});
