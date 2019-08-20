/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Use any variables or methods deemed necessary
to solve each problem.

You can use either regular functions or
arrow functions for your callbacks
*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Sample Problem:

1. Using the `presidents` array, return the name of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

************/
console.log('Sample Problem:')

// Add your code below this line

const firstWhigPresident = presidents.find(function (president) {
  return president.party === 'Whig'
})

console.log(firstWhigPresident.president)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 1:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const

2. Print `presidentsNamedJames` to the console

************/
console.log('Problem 1:')

// Add your code below this line

const namesOnly = presidents.map(function(president){
  return president.president
})

const presidentsNamedJames = namesOnly.filter(function(name){
  let firstName = name.replace(/ .*/,'')
  if (firstName === 'James') {
    return name
  }
})

console.log(presidentsNamedJames)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Tip: your new array should contain 45 elements

************/
console.log('Problem 2:')

// Add your code below this line

const presidentialParties = presidents.map(function(president){
  return president.party
})

console.log(presidentialParties)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

************/
console.log('Problem 3:')

// Add your code below this line

// add new property
const addFirstYear = presidents.map(function(president){
  president.year = president.took_office.substring(0, 4)
  return president
})

// filter by specified range
const inRange = addFirstYear.filter(function(president){
  if (1990 > president.year && president.year > 1850) {
    return president
  }
})

// extract name property
const presidentsBetween1850and1900 = inRange.map(function(president){
  return president.president
})

console.log(presidentsBetween1850and1900)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

************/
console.log('Problem 4:')

// Add your code below this line

const isDead = presidents.filter(function(president){
  return president.death_year === null
})

const livingPresidents = isDead.map(function(president){
  return president.president
})

console.log(livingPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array,
return the name of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

************/
console.log('Problem 5:')

// Add your code below this line

const firstRepublican = presidents.find(function(president){
  return president.party === 'Republican'
})

console.log(firstRepublican.president)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

************/
console.log('Problem 6:')

// Add your code below this line

const leftOffice = presidents.filter(function(president){
  return president.left_office !== null
})

const addYears = leftOffice.map(function(president){
  president.firstYear = president.took_office.substring(0, 4)
  president.lastYear = president.left_office.substring(0, 4)
  return president
})

const lessThanFour = presidents.filter(function(president){
  return president.lastYear - president.firstYear < 4
})

const shortTermPresidents = lessThanFour.map(function(president){
  return president.president
})

console.log(shortTermPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
