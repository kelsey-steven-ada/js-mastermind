# Mastermind

## Skills Assessed
- Manipulating and processing data in lists, strings, and dictionaries
- Writing code to a specification
- Reading tests
  
## Mastermind
Mastermind is a game in which one player, the codemaker, generates a code consisting of four colored pegs. Each peg can be one of six colors: red, yellow, green, blue, indigo, or violet. 

The second player, the codebreaker, attempts to guess the codemaker's code by submitting their own series of four colored pegs. After each guess, the codemaker provides the codebreaker with two numbers:
1. The number of pegs that are both the correct color and in the correct position
2. The number of pegs that are the correct color but in the wrong position

The codebreaker continues to submit guesses and receive feedback until they correctly guess the code. The aim of the game is to guess the codemaker's code in the least number of guesses. 

In this version of _Mastermind_, we will be using the letters `['R', 'Y', 'G', 'B', 'I', 'V']` to represent pegs colored red, yellow, green, blue, indigo, and violet respectively. 

We will also limit the maximum number of guesses to 8. If the codebreaker does not correctly guess the code within 8 guesses, they lose the game.

You will be creating a randomly generated code for the user to guess. 


## Project Overview: How to Complete and Submit

Our goal is to build up the functions that comprise a game of Mastermind along with a game loop function that brings them all together. 

We want to write code in `game.js` and `mastermind.js` such that each of the functions meets the requirements outlined in the Project Directions below. 

Go through the waves one-by-one and build the features of this game. You will use play-testing and unit tests to drive your development.

## Project Directions

### Get Familiar

Take time to read through the Wave 1 implementation requirements and the tests for Wave 1. Write down your questions, and spend some time going through your understanding of the requirements and tests. Make sure you can run the tests and see them fail.

### Wave 1: Game Setup
The first step in setting up a new game is to generate a code of 4 colors (represented as letters) for the user to guess. To do so, implement the function `generate_code` in `game.js`. This function should have the following properties:

- No parameters
- Returns a list of length 4
- Each element in the list should be any of the following letters: R, Y, G, B, I, V

### Wave 2: validate_guess and check_win_or_lose
Next, you need a way to check if a user's guess is of the correct length and only uses valid letters.

To do so, implement the function called `validate_guess` in `game.js`. This function should have the following properties:

- Has one parameter
  - `guess` describes some input list
- Returns either `True` or `False`
- Returns `True` 
  - if every element in `guess` one of the following letters: R, Y, G, B, I, V
  - the length of `guess` is 4 (the length of the generated code)
- Returns `False` if not; if there is a letter in `input` that is not R, Y, G, B, I, or V or the length of `input` is not 4
- `validate_guess` should be case insensitive
  - `input = ['R','Y','G','B']` should return `True`
  - `input = '['r','y','g','b']` should return `True`

#### Examples

|Guess                 | Output|
|:--------------------:|:-----:|
|['R','I','Y','G']     | True  |
|['R','M','Y','G']     | False |
|['R','i','Y','G']     | True  |
|['r','i','y','g']     | True  |
|['R','I','Y','G','B'] | False |

Once a user has entered their guess, we need a method to check whether or not the round has been won.

Implement a function called `check_win_or_lose` in `game.js`. This function should have the following properties:
- Has three parameters:
  - `guess`, which is a list of characters representing the user's guess
  - `code`, which is a list of characters representing the code the user is attempting to guess
  - `num_guesses`, which is an integer representing the total number of guesses the user has made in the round thus far
- Returns `True` if the user has won the game: `guess` and `code` are the same _and_ `num_guesses` is less than or equal to 8
- Returns `False` if the user has lost the game: if `guess` and `code` are not the same _and_ `num_guesses` is more than 8 
- Returns `None` otherwise - the game is still in progress

### Wave 3: color_count, correct_pos_and_color, check_guess
Now you need to provide feedback to the user about their guess as defined by the Mastermind game. The ultimate goal is to provide the user with two numbers:
1. The number of pegs that are both the correct color and in the correct position
2. The number of pegs that are the correct color but in the wrong position

To do this, you will write three functions: `color_count`, `correct_pos_and_color`, and `check_guess`.

The first function to implement is `color_count` in `game.js`. This function should have the following properties:
- Has two parameters:
  - `guess`, which is a string of characters representing the user's guess
  - `code`, which is a string of characters representing the code the user is attempting to guess
- Returns an integer representing the number of pegs that are the correct color (aka letter), **regardless of whether they are in the correct position or not**
- If no pegs are the correct color, `color_count` returns `0`
- A letter that appears more times in `guess` than it appears in `code` is counted the number of times it appears in `code`
- A letter that appears fewer times in `guess` than it appears in `code` is counted the number of times it appears in `guess`


#### Examples

|Guess              | Code              | Output|
|:-----------------:|:-----------------:|:-----:|
|['R','I','Y','G']  |['G','Y','I','R']  | 4     |
|['R','I','Y','G']  |['R','Y','I','G']  | 4     |
|['R','R','R','B']  |['B','I','R','R']  | 2     |
|['R','R','I','I']  |['B','R','R','R']  | 2     |
|['R','I','Y','G']  |['V','V','V','V']  | 0     |


The second function to implement is `correct_pos_and_color` in `game.js`. This function should have the following properties:
- Has two parameters:
  - `guess`, which is a list of characters representing the user's guess
  - `code`, which is a list of characters representing the code the user is attempting to guess
  - Returns an integer representing the number of pegs in `guess` whose color (aka letter) is the same as the peg at the matching index in `code`
  - If no pegs in `guess` match both the color and index of those in `code`, `correct_pos_and_color` returns `0`

#### Examples

|Guess              | Code              | Output|
|:-----------------:|:-----------------:|:-----:|
|['R','I','Y','G']  |['R','I','Y','G']  | 2     |
|['R','I','Y','G']  |['G','Y','I','R']  | 0     |
|['R','R','R','B']  |['R','I','B','B']  | 2     |

The final function to implement is `check_guess` in `game.js`. This function should have the following properties:
- Has two parameters:
  - `guess`, which is a list of characters representing the user's guess
  - `code`, which is a list of characters representing the code the user is attempting to guess
  - Returns an array of length 2 containing two integers
    - the first integer is the number of pegs in `guess` that have the same color and position as the corresponding pegs in `code`
    - The second integer is the number of pegs in `guess` that are the correct color but in a different position than the pegs in `code`

#### Examples

|Guess              | Code             | Output|
|:-----------------:|:----------------:|:-----:|
|['R','I','Y','G']  |['G','Y','I','R'] | 0, 4  |
|['R','I','Y','G']  |['R','Y','I','G'] | 2, 2  |
|['R','R','R','B']  |['B','I','R','R'] | 1, 2  |
|['R','R','I','I']  |['B','R','R','R'] | 1, 1  |
|['R','I','Y','G']  |['V','V','V','V'] | 0, 0  |


### Wave 4: Statistics
We also want to track statistics over multiple rounds and display those statistics at the end of each round. 

To aid us in this, implement `get_win_percentage` which has the following properties:
- Has two parameters
    - `wins`, which is an integer representing the number of games the user has won
    - `plays`, which is an integer representing the total number of rounds the user has played in the session
- Returns an integer representing the percentage of rounds won over the current session
    - the win percentage should round down

#### Examples

|Wins  | Plays | Output|
|:----:|:-----:|:-----:|
|0     |0      | 0     |
|0     |4      | 0     |
|3     |4      | 75    |
|1     |15     | 6     |

Next, implement the `format_guess_stats` function which has the following properties:
- Has one parameter:
    - `guess_stats`, a dictionary where `guess_stats[i]` is the number of rounds the user has won in _i_ guesses
- Returns a list of length 8
    - Element at index `i` of the list is a string of length _n_, where _n_ is the number of rounds won in `i+1` guesses
    - If _n_ is 0, the string should be empty
    - All characters comprising the string should be identical

#### Examples

|guess_stats | Output|
|:----------:|:-----:|
|{1: 1, 3:4, 5:1 }|['X', '', 'XXXX', '', 'X', '','','']| 
|{}               |['','','','','','','','']           |


### Wave 5: Game Loop
Using the functions built in previous waves, complete the `mastermind` function. Note that there are no tests to verify the correctness of your game loop. Instead use play testing and the example outputs provided below to guide your implementation.

The `mastermind` function should implement a game loop. As part of your game loop, you will need to track the following data:
- `plays`, an integer representing the total number of rounds played
- `wins`, an integer representing the total number of rounds won
- `guess_stats`, a dictionary representing the number of rounds won in _n_ guesses 
    - Only rounds where the player won the game (total number of guesses was less than or equal to 8) are added to `guess_stats`
- `guesses`, an integer representing the number of guesses the user has made in the current round

Your game loop does not need to match the example output we provide below word for word, however it should contain these basic components:
- Welcome message on program start
- Prompt for user input and give feedback on how that user input compares to the secret code continuously until the winner either
    - correctly guesses the code
    - exceeds 8 guesses
- Winning message if the user correctly guesses the code in 8 guesses or under
- Losing message if the user fails to correctly guess the code in 8 guesses or under
- Print out of Session Statistics after a round finishes 
    - Number of rounds played
    - Win Percentage (what percentage of all rounds played were won)
    - Guess Distribution Graph:
        - How many of the rounds played were won with each possible number of guesses (1-8)
- Option to play another round



The game loop should begin the program with a welcome message.
#### Example Welcome Message
```
Welcome to Mastermind!
```

The game loop should then generate a new code to guess and give the user directions on how to play the game.

#### Example Instructions
```
Generating a new code...
New code generated: ****
Guess the code! Each character in the code is one of the following letters: R, Y, G, B, I, V
```

The game loop should then prompt the user to input a guess.
#### Example User Prompt
```
Guess the code:
```
The game loop should take the user's input and print it out.

#### Example Guess Print Out
```
Assume
    user_input = RRB
----------
Game Loop Output
    You guessed: RRRB
```

If the user did not correctly guess the secret code, 

alongside feedback about how many of the letters in their guess were the correct color and in the correct position and how many were the correct color but in the wrong position.
#### Example Guess Feedback
```
Assume 
    code = BIRR
    user_input = RRRB
------
Game Loop Output
    (1,2)
```

The game loop should continue to prompt the user for new guesses and provide corresponding feedback until they have correctly guessed the code or surpassed 8 guesses.
#### Example Feedback Loop
```
Assume 
    code = BIRR
------
Game Loop Output
    You guessed: RRRB
    (1,2)
    Guess the code: 
    You guessed: BRRR
    (3,0)
    Guess the code:
    You guessed: BRGR
    (2,1)
    Guess the code:
    ...
```

If the user correctly guesses the code at any point during the game, they have won the game. The game loop should stop prompting them for additional guesses and display a message congratulating them for winning the game.

```
Assume 
    code = BIRR
------
Game Loop Output
    You guessed: BIRR
    Congratulations! You guessed the secret code!
```

If the user has made 8 guesses and still has not correctly guessed the secret code, they have lost the game. The game loop should stop prompting them for additional guesses and display a lose message.
```
Assume 
    code = BIRR
------
Game Loop Output
    Guess the code:
    You guessed: RRRB
    (1,2)
    Guess the code: 
    You guessed: RRRB
    (1, 2)
    Guess the code:
    You guessed: RRRB
    (1, 2)
    Guess the code:
    You guessed: RRRB
    (1,2)
    Guess the code: 
    You guessed: RRRB
    (1, 2)
    Guess the code:
    You guessed: RRRB
    (1,2)
    Guess the code: 
    You guessed: RRRB
    (1, 2)
    Guess the code:
    You guessed: RRRB
    (1,2)
    You lost 😥 Better luck next time!
```
Regardless of whether the player wins or loses, once the round has finished, the game loop should print out statistics about the session so far. Statistics should include:
- Number of rounds played
    - Win Percentage (what percentage of all rounds played were won)
    - Guess Distribution Graph:
        - How many of the rounds played were won with each possible number of guesses (1-8)
#### Example Session Statistics
```
STATISTICS
Games Played: 10
Win %: 80
Guess Distribution:
1| ⎕
2| 
3| ⎕ ⎕ ⎕ 
4| 
5| 
6| ⎕ ⎕ 
7| ⎕ 
8| ⎕ 
```
Finally, after printing out the session statistics, the game loop should ask the user whether they would like to play again. If the user responds yes, a new round of the game should begin. Otherwise, the program should end.
#### Example Play Again Prompt
```
Should we play another round?
Enter y to replay, any other character to exit:
```



#### Example of Full Game Loop
Note that lines marked #### denote user input and are not printed by the program as part of the game loop
```
Welcome to Mastermind!
Generating a new code...
New code generated: ****
Guess the code! Each character in the code is one of the following letters: R, Y, G, B, I, V
Guess the code: 
####user input: GRRY
You guessed: GRRY
Congratulations! You guessed the secret code!
STATISTICS
Games Played: 1
Win %: 100
Guess Distribution:
1| X
2| 
3| 
4| 
5| 
6| 
7| 
8| 
Should we play another round?
Enter y to replay, any other character to exit: 
####user input: y

Generating a new code...
New code generated: ****
Guess the code! Each character in the code is one of the following letters: R, Y, G, B, I, V
Guess the code: 
####user input: RRRB
You guessed: RRRB
(1,2)
Guess the code: 
####user input: BIRR
You guessed: BIRR
Congratulations! You guessed the secret code!
STATISTICS
Games Played: 2
Win %: 100
Guess Distribution:
1| X
2| X
3| 
4| 
5| 
6| 
7| 
8| 
Should we play another round?
Enter y to replay, any other character to exit: 
####user input: y

Generating a new code...
New code generated: ****
Guess the code! Each character in the code is one of the following letters: R, Y, G, B, I, V
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
Guess the code: 
####user input: RRRR
You guessed: RRRR
(1,2)
You lost 😥 Better luck next time!
STATISTICS
Games Played: 3
Win %: 66
Guess Distribution:
1| X
2| X
3| 
4| 
5| 
6| 
7| 
8| 
Should we play another round?
Enter y to replay, any other character to exit: 
####user input: n
```