/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over.
Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success
criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

4. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line


function blackJack(playerCardScore, dealerCardScore) {

  if ((playerCardScore > 21) || (playerCardScore <= 0)) {
    playerCardScore = 0
  }
  if ((dealerCardScore > 21) || (dealerCardScore <= 0)) {
    dealerCardScore = 0
  }
  if (playerCardScore > dealerCardScore) {
    return playerCardScore
  } else {
    return dealerCardScore
  }
}

console.log (blackJack(21, 21))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line
function wordCount(phrase){
  const phraseWords = phrase.split(' ')
  const wordMapObj = {}
  phraseWords.forEach((word)  => {
    // check if word is already in wordMapObj
    // if it's not, add it as a key and set value to 1
    // if it is already in wordMapObj then increment value of word (key) by 1
  if (wordMapObj[word] === undefined) {
    // if word doesn't exist in wordMapObj
    wordMapObj[word] = 1
  } else {
    // when word does already exists in wordMapObj
    wordMapObj[word] += 1
  }
  })

  console.log(wordMapObj)
}

wordCount("olly olly in come free")
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word".
The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line

let letters = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}

let word

function scrabbleScore(word){
  // we define sum, which is accumulator; when starting the program, the default sum is 0
  let sum = 0
  let bigWord = word.toUpperCase()
  // here i refers to the letter inside the string; for example, in "cabbage" c will have index 0; i++ here means lopping through the letters of the word
  for ( let i = 0; i < bigWord.length; i++) {
    // bigWord at index i will be just a certain letter
    let letter = bigWord[i]
    // sum += means it adds to itself (accumulating); letter[letter] is how we access the object LETTERS and its keys
    sum += letters[letter]
  }
  return sum
}
console.log(scrabbleScore("cabbage"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example,
"madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word".
The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet
 the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

let word = "noon"
function reverseWord(word) {
    return word.split("").reverse().join("")
}
let drow = reverseWord(word)

function isPalindrome(word) {
  if (drow == word) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(word))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// Add your code below this line

function doubleLetters(word) {
    // create an array of letters from the provided word
    let letters = word.split('')

    for (let i = 0; i < letters.length; i++) {
           // check if current letter is the same letter
           // is the current letter in the loop
        if (letters[i] === letters[i + 1]) {
          // return true as soon as we find 2 consecutive letters
          // that are the same
          return true
        }
    }
    // if for loop doesn't return true then return false
      return false
}
console.log(doubleLetters('apple'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
