/******************
 * YOUR CODE HERE *
 ******************/
const Person = (first, last, age = 0, married = false) => {
  const userInfo = {

    firstName: first,
    lastName: last,
    age: age,
    married: married,

    goingOn: function () {
      return userInfo.age + 1

    },

    ageUp: function () {
      return this.age++
    },

    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },

    marry: function (person) {
      this.married = true
      person.married = true
      this.spouseName = `${person.firstName} ${person.lastName}`
      person.spouseName = `${this.firstName} ${this.lastName}`
    },

    divorce: function (person) {
      this.married = false
      person.married = false
      delete this.spouseName
      delete person.spouseName
    },
    
  }
  return userInfo
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! YOU'RE NOT MY SUPERVISOR!*
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;
