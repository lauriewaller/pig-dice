# Pig Dice

#### A survey to tell the user their fortune based on their recent events

#### By **Laurie Waller & Nick Hennessy**

## Technologies Used

* CSS
* HTML
* JavaScript
* jQuery

## Description

This survey asks the user to answer questions about both lucky and unlucky events they've encountered recently, and it then returns a fortune based on those events.

## Setup/Installation Requirements

  1. Go to the main page of the repository (https://github.com/laurie7/luck-survey)
  2. In the top righthand corner of the list of files, click the Code dropdown menu.
  3. Click on the clipboard icon to copy the URL to the GitHub repo.
  4. On your computer, open Terminal and navigate to the parent folder where you plan to clone the repo folder.
  5. Type in `git clone` and then paste the URL you copied:
      `git clone https://github.com/laurie7/luck-survey`. Press Enter.
  6. One great application to open your files in is Visual Studio Code. To download VS Code, go to https://code.visualstudio.com/ and click on Download in the top righthand corner. From there, choose the donwload type necessary from your computer and follow the prompts.
  7. After you have completed the download, return to Terminal. Once you've ensured you are in the portfolio folder, type `code .` and press Enter. This will open all files in VS Code for you.

## Tests

**Describe: rollDice()**

Test: "It should return a whole number between 1 and 6."
Expect: (rollDice(userClick).toEqual(2);

**Describe: hold()**
Test: "It should add round total to current player's score."
Expect: (rollDice(userClick).toEqual(2);

Test: "It should reset the round score."
Expect: (roundScore(userClick).toEqual(0);

Test: "It should switch between players."
Expect: (currentPlayer(userClick).toEqual(nextPlayer);

**Describe: rollOne()**

Test: "It should reset the round score."
Expect: (roundScore(userClick).toEqual(0);

Test: "It should switch between players."
Expect: (currentPlayer(userClick).toEqual(nextPlayer);

## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2021 by Laurie Waller

## Contact Information

_Laurie Waller (lauriewaller7@gmail.com)_