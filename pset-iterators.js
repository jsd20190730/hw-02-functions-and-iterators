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

let presidentsNamedJames = function(){

  // filter out presidents with the first named James
  // create a new array of objects
  const namedJames = presidents.filter(function(president){
    return president.president.startsWith('James')
  })

  // create a new array containing the 'president' properties from objects in namedJames array
  const namesOnly = namedJames.map(function(president){
    return president.president
  })

  return namesOnly

}

console.log(presidentsNamedJames())

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

const presidentsBetween1850and1900 = function(){

  // create a new array of presidental objects with added took_office_year integer property
  const presidentsWithAddedProperty = presidents.map(function(president){
    president.took_office_year = parseInt(president.took_office.substring(0, 4))
    return president
  })

  // filter out presidential objects whose took_office_year property is in the specified range
  const presidentsInRange = presidentsWithAddedProperty.filter(function(president){
    return (1850 < president.took_office_year && president.took_office_year < 1900)
  })

  // create a new array containing only the 'president' properties from objects in presidentsInRange array
  const namesOfPresidentsInRange = presidentsInRange.map(function(president){
    return president.president
  })

  return namesOfPresidentsInRange

}

console.log(presidentsBetween1850and1900())


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

const livingPresidents = function(){

  const livingPresidents = presidents.filter(function(president){
    return president.death_year === null
  })

  const namesOfLivingPresidents = livingPresidents.map(function(president){
    return president.president
  })

  return namesOfLivingPresidents

}

console.log(livingPresidents())

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

const shortTermPresidents = function(){

  // remove the president who hasn't left office yet
  presidents.pop()

  // create a new array of presidental objects with added integer properties
  const presidentsWithAddedProperties = presidents.map(function(president){
    president.took_office_year = parseInt(president.took_office.substring(0, 4))
    president.left_office_year = parseInt(president.left_office.substring(0, 4))
    return president
  })

  // filter out presidents who served less than four years
  const presidentsWhoServedLessThanFourYears = presidentsWithAddedProperties.filter(function(president){
    return president.left_office_year - president.took_office_year < 4
  })

  const namesOfPresidentsWhoServedLessThanFourYears = presidentsWhoServedLessThanFourYears.map(function(president){
    return president.president
  })

  return namesOfPresidentsWhoServedLessThanFourYears

}

console.log(shortTermPresidents())

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
