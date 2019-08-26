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

const firstWhigPresident = presidents.find(function(president){
  return president.party === 'Whig'
})

console.log(firstWhigPresident)

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

const presidentsNamedJames = presidents.filter(function(president){
  // indexOf is a method that works on a string or array and gives us the index of the item that is in ()
  return president.president.indexOf("James") === 0
})

console.log(presidentNamedJames)

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
const presidentsBetween1850and1900 = presidents.filter(function(president){
  // Number converts string to number ; slice (0,4) shows us that we work only with first 4 characters - from index 0 to 3
  let took_office = Number(president.took_office.slice(0,4))
  return took_office >= 1850 && took_office <= 1900
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

const livingPresidents = presidents.filter(function(president){
    return president.death_year === null
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
console.log(firstRepublican)

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
const shortTermPresidents = presidents.filter(function(president){
  
  if(president.left_office === null){
    return false
  }
  let took_office = Number(president.took_office.slice(0,4))
  let left_office = Number(president.left_office.slice(0,4))
  return left_office - took_office < 4

})

console.log(shortTermPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
