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
const presidentsNamedJamesArr = presidents.filter(function (president){
  return president.president.indexOf('James') === 0
})

for (let i = 0; i < presidentsNamedJamesArr.length; i++) {
  console.log(presidentsNamedJamesArr[i].president)
}

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
const presidentialParties = []

presidents.forEach((element) => {
  presidentialParties.push(element.party)
})
// Add your code above this line

/** added for formatting purposes **/
console.log(presidentialParties)
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
const presidentsBetween1850and1900 = []
presidents.forEach((element) => {
  let presidentsTookOffice = element.took_office.split("-")
  if (presidentsTookOffice[0] >= 1850 && presidentsTookOffice[0] <= 1900) {
    presidentsBetween1850and1900.push(element.president)
  }
})

// Add your code above this line

/** added for formatting purposes **/
console.log(presidentsBetween1850and1900)
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
const livingPresidents = []
presidents.forEach((element) => {
  if (element.death_year === null) {
    livingPresidents.push(element.president)
  }
})
// Add your code above this line

/** added for formatting purposes **/
console.log(livingPresidents)
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
const firstRepublican = presidents.find((element) => {
  return element.party === 'Republican'
})
// Add your code above this line

/** added for formatting purposes **/
console.log(firstRepublican.president)
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
let presidentsOutOfOfficeArr = presidents.filter(function (element) {
    return element.left_office !== null
  })


const shortTermPresidents = []
presidentsOutOfOfficeArr.forEach(function (element) {
  let presidentsTookOfficeArr = element.took_office.split('-')
  let presidentsLeftOfficeArr = element.left_office.split('-')
  if (presidentsLeftOfficeArr[0] - presidentsTookOfficeArr[0] > 4) {
    shortTermPresidents.push(element.president)
  }
})
presidents.forEach(function (element) {
  if (element.left_office === null) {
    shortTermPresidents.push(element.president)
  }
})
// Add your code above this line

/** added for formatting purposes **/
console.log(shortTermPresidents)
console.log('-----------------')
