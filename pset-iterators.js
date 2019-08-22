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

const presidentsNamedJames = presidents.filter(kingJames => kingJames.president.indexOf('James') === 0)

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


const presidentialParties = presidents.map(function (president) {
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

// return all of the presidents then

// Add your code below this line

const presidentsBetween1850and1900 = presidents.filter(dateInOffice => {
   let stepUp = dateInOffice.took_office.slice(0,4)
   if (stepUp < 1900 && stepUp > 1850) {
   return true;
 }
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

const livingPresidents = presidents.filter(stayinAlive => {
   let beeGees = stayinAlive.death_year
   if (beeGees === null) {
   return true;
 }
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

const firstRepublican = presidents.find(function (president) {
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


const shortTermPresidents = presidents.filter(lessThan4 => {

  let fuckDonaldTrump = presidents.pop()

   let yearLeft = lessThan4.left_office.slice(0,4)
   let yearStart = lessThan4.took_office.slice(0,4)

   let numberOfYears = yearLeft - yearStart
   if (numberOfYears < 4) {
   return true;
 }
})

console.log(shortTermPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
