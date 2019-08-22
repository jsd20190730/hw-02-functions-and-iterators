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
function blackJack (playerCardScore, dealerCardScore){

  //both players are over 21
  if (playerCardScore > 21 && dealerCardScore > 21){
    return (`Result: 0`)
  }

  //player is over 21; dealer is equal or under - dealer wins
  else if (playerCardScore > 21 && dealerCardScore <= 21){
    return (`Result: ${dealerCardScore}`)
  }

  //dealer is over 21; player is equal or under - player wins
  else if (playerCardScore <= 21 && dealerCardScore > 21){
    return (`Result: ${playerCardScore}`)
  }

  //both player and dealer are under 21, return higher val
  else{
    let max = Math.max (playerCardScore, dealerCardScore)
    return (`Result: ${max}`)
  }
}

console.log(blackJack(23, 22))

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
  let words = phrase.split(/[ ,]+/)
  let wordObj = {}

  words.forEach(function(element){
    if (!(element in wordObj)){
      wordObj[element] = 1
    }
    else{
      wordObj[element] = wordObj[element] + 1
    }
  })

  return(wordObj)
}

let test = wordCount("Baby shark, doo doo doo doo doo doo")

console.log('Result: ')

for (let [key, value] of Object.entries(test)) {
  console.log(`${key}: ${value}`);
}

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

let problem3test = "javascript"
console.log(`Test Word: ${problem3test}`)

function scrabbleScore(word){

  onePt = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  twoPts = ['D', 'G']
  threePts = ['B', 'C', 'M', 'P']
  fourPts = ['F', 'H', 'V', 'W', 'Y']
  fivePts = ['K']
  eightPts = ['J', 'X']
  tenPts = ['Q', 'Z']

  words = word.split("")

  let score = 0

  words.forEach(function (element){
    if (typeof(onePt.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 1
    }

    if (typeof(twoPts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 2
    }

    if (typeof(threePts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 3
    }

    if (typeof(fourPts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 4
    }

    if (typeof(fivePts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 5
    }

    if (typeof(eightPts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 8
    }

    if (typeof(tenPts.find(letter => letter === element.toUpperCase())) !== 'undefined'){
      score = score + 10
    }
  })

  return score
}

problem3result = scrabbleScore(problem3test)
console.log(`Result: ${problem3result}`)

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
let problem4test = "moon"
console.log(`Test Word: ${problem4test}`)

function isPalindrome(word){
  arrwords = word.split("")
  arrwords.reverse()
  let reverseword = arrwords.join("")
  if (reverseword === word){
    return true;
  }
  else{
    return false;
  }
}

let problem4result = isPalindrome(problem4test)
console.log(`Result: ${problem4result}`)



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
let problem5test = "apple"
console.log(`Test Word: ${problem5test}`)

function doubleLetters(word){
  arrwords = word.split("")
  testcase = arrwords[0]

  for(let i = 1; i<arrwords.length; i++){
    if (testcase === arrwords[i]){
      return true;
    }
    else {
      testcase = arrwords[i]
    }
  }
  return false
}

let problem5result = doubleLetters(problem5test)
console.log(`Result: ${problem5result}`)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
