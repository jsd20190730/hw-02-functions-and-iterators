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

// Add your code below this line

function blackJack(playerCardScore,dealerCardScore){
  if (playerCardScore === 21 || dealerCardScore === 21){
    return 21
  } else if (playerCardScore > 21 && dealerCardScore > 21){
    return 0
  } else if (playerCardScore < 21 && dealerCardScore > 21){
    return playerCardScore
  } else if (playerCardScore > 21 && dealerCardScore < 21){
    return dealerCardScore
  } else {
    return Math.max(playerCardScore,dealerCardScore)
  }
}

console.log(blackJack(19,21)) // INSERT ANY TWO NUMBERS

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 2
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

  // split provided phrase into an array of words
  let words = phrase.split(' ')
  
  // create a generic function that returns how many times a value occurs in any given array
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length
  }
  
  // using above function, create a new array of words and their occurances
  let wordsAndOccurences = words.map(function(word){
    return `${word}: ${getOccurrence(words, word)}`
  })

  // convert new array into a Set object in order to remove duplicates
  let uniqueWordsAndOccurences = new Set(wordsAndOccurences)

  // convert Set object back to an array
  uniqueWordsAndOccurences = Array.from(uniqueWordsAndOccurences)

  return uniqueWordsAndOccurences

}

console.log(wordCount("olly olly in come free")) // INSERT ANY PHRASE

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

function scrabbleScore(word){

  // split the provided word into an array of characters
  const characters = word.split('')
  
  // create new array of points from characters
  const points = characters.map(function(character){
    if (character === 'q' || character === 'z'){
      return 10
    } else if (character === 'j' || character === 'x'){
      return 8
    } else if (character === 'k'){
      return 5
    } else if (character === 'f' || character === 'h' || character === 'v' || character === 'w' || character === 'y'){
      return 4
    } else if (character === 'b' || character === 'c' || character === 'm' || character === 'p'){
      return 3
    } else if (character === 'd' || character === 'g'){
      return 2
    } else {
      return 1
    }
  })

  // add points
  const score = points.reduce((sum, points) => sum + points)
  
  return score
}

console.log(scrabbleScore('cabbage')) // INSERT ANY WORD

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

function isPalindrome(word){
  const characters = word.split('')
  const reverseCharacters = characters.reverse()
  const reverseWord = reverseCharacters.join('')
  const result = (word === reverseWord) ? true : false
  return result
}
  
console.log(isPalindrome('noon')) // INSERT ANY WORD

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



function doubleLetters(word){

  // split the provided word into an array of characters
  let letters = word.split('')

  for(let i = 0; i < letters.length; i++){

    // check if current letter is same as the next letter in the array
    // if returns true, exits the entire doubleLetters function
    if (letters[i] === letters[i + 1]){
        return true
    }

  }

  // by now, it's gone through the entire for loop, and nothing returned true
  return false
}

console.log(doubleLetters('loop'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
