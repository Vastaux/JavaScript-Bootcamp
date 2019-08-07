// Constructor function for Hangman game

const HangMan = function (word, tries) {
    this.word = word.toLowerCase().split('' && ' ');
    this.puzzleArray = [...this.word];
    this.guessedLetters = [];
    this.triesLeft = tries;
};

// Takes the guess, reduces the tries left and adds letter to guessed list

HangMan.prototype.guessLetter = function (letter) {
    this.triesLeft --;
    this.guessedLetters.push(letter)
    console.log(this.getPuzzle());
    console.log(`Tries left: ${this.triesLeft}`)
};

// Checks the puzzleArray against the original word array and adds an '*'
// for letters not guessed yet.

HangMan.prototype.getPuzzle = function () {

    this.puzzleArray.forEach((element) => {
        if (element.length === 1 && element.match(/[a-z]/i) && !this.guessedLetters.includes(element) ) {
            let index = this.puzzleArray.indexOf(element);
            this.puzzleArray[index] = '*';
        }
    });

    return `The puzzle is ${this.puzzleArray}`;

};

const newHang = new HangMan('aRRow dog', 10)

newHang.guessLetter('r');
