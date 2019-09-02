/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

let playerCardScore = 21
let dealerCardScore = 21

function blackJack(playerCardScore, dealerCardScore) {

  const maximumScore = 21
  const overScore = 22
  const defaultScore = 0

  let outComeOne = maximumScore - playerCardScore;
  let outComeTwo = maximumScore - dealerCardScore;

  if (playerCardScore >= overScore && dealerCardScore >= overScore){
    return(defaultScore)
  }
  else if (playerCardScore >= overScore){
    return(dealerCardScore)
  }
  else if (dealerCardScore >= overScore){
    return(playerCardScore)
  }
  else if (outComeOne > outComeTwo) {
    return(dealerCardScore)
  }
  else if (outComeTwo > outComeOne) {
    return(playerCardScore)
  }
  else if (playerCardScore && dealerCardScore === 21){
    return(maximumScore)
  }

}

// Add your code below this line
console.log(blackJack(playerCardScore, dealerCardScore))
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

function wordCounter (phrase) {
  //function called word counter with parameter of phrase that passes in the string
  const wordCount = phrase.split(' ')
     //split the phrase up! SPACE!!!! YOU NEED SPACE!!!! >(^.^)<
  const wordMapObj = {} // keeps track of occurances
// any time you have to check a string you use a hashmap
    wordCount.forEach((word) => {
      //check if word is already in wordMapObj
      //if it is not in wordmapObj then add it and set value to one
      //if word is already in wordMapObj then increment value of word (key) by 1

      //how do you check to see if a key is in the object? you can use dot notation or use bracket notation as well
      //with dot notation you cannot pass in a variable to see if that key exists
    if (wordMapObj[word] === undefined) {
        //if word does not exist in wordMapObj
    wordMapObj[word] = 1
    } else {
    wordMapObj[word] += 1
    }
  })
  console.log(wordMapObj)
}
wordCounter('Humpty Dumpty sat on a wall Humpty Dumpty had a great fall')

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

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

const scrabbleWord = "javascript"

function scrabbleScore(scrabbleWord) {
  const scrabbleLetters = scrabbleWord.split('')

  let letterPoints = scrabbleLetters.map(letter => {
    if (letter === 'q' || letter === 'z'){
      return 10
    } else if (letter === 'j' || letter === 'x') {
      return 8
    }  else if (letter === 'k') {
      return 5
    } else if (letter === 'f' || letter  === 'h' || letter  === 'v' || letter  === 'w' || letter  === 'y') {
      return 4
    } else if (letter  === 'b' || letter === 'c' || letter === 'm' || letter === 'p') {
      return 3
    } else if (letter === 'd' || letter === 'g') {
      return 2
    } else {
    return 1
    }
  })
  const totalPoints = letterPoints.reduce((a,b) => a + b, 0)
//*happy dance*
  console.log(totalPoints)
}
console.log(scrabbleScore('scrabbleWord'))




// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

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
/* alright (your name here). Here's what's happening.
// string is being passed through a function with a parameter of paladinword
// the function is splitting the word into an array
// there is a function of p checker that is checking the if the string and the value is strict equals.
// if it is then return the value of true, if not return false
// THATS IT!!! WOHOO >(^.^)< */


function isPalindrome(paladinWord) {
  const paladinReverseWord = paladinWord.split('').reverse().join('');
  //koo, i am getting the reverse of the string here
  //console.log(paladinReverseArray)
    if (paladinWord === paladinReverseWord) {
        return true
    } else {
      return false
      }
  console.log(isPalindrome())
  }

// *HAPPY DANCE*
isPalindrome('run')

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

//Cas old code
// function doublePhrase(doubleWord) {
//   const doubleCounter = doubleWord.split('')
//   // NO SPACE!!! NO SPACE!!!!!!! ^^^^^ >(^.^)<
//   const doubleMapObj = {}
//
//   doubleCounter.forEach((char) => {
//
//    if (doubleMapObj[char] === undefined) {
//      doubleMapObj[char] = 1
//    }
//    else {
//      doubleMapObj[char] += 1
//    }
//   })
//
//   function charChecker() {
//     //for in only works keys for objects
//     //object.keys
//     for (let char in doubleMapObj) {
//       if (doubleMapObj[char] > 1) {
//         return true
//       }
//     }
//     return false
//   }
//   console.log(charChecker())
// }
//
// doublePhrase('apple')

// Kareem's code
function doubleLetters (word) {
  // create an array of letters from the provided word
  let letters = word.split('')

  for (let i = 0; i < letters.length; i++) {
    // check if current letter in the loop
    // is the same as the next letter in the loop
    if (letters[i] === letters[i + 1]) {
      // return true as soon as we find
      // two consecutive letters that are the same
      return true
    }
  }

  // if for loop does not return true, then return false
  return false
}

console.log(doubleLetters('apple'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')


// let points = {
//     e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1,
//     d: 2, g: 2,
//     b: 3, c: 3, m: 3, p: 3,
//     f: 4, h: 4, v: 4, w: 4, y: 4,
//     k: 5,
//     j: 8, x: 8,
//     q: 10, z: 10 }
//
// let letter = 'k'
// console.log(points[letter])
// //
