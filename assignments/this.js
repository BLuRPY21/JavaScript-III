/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window and Global object binding, since its on the global we can access it from the outside which allows us to use it over and over
* 2. Implicit Binding, This is the binding of an object by "this.function" which simplifies and saves time and writing it out each time
* 3. new binding, this is a function that returns an object and it is accessed by using the keyword "new". i still need to go over this more to get a full understanding...
* 4. Explicit Binding, this is when .call or .apply is used and it will override
*
* write out a code example of each explanation above
*/

// Principle 1

// function screamName(name) {
//     console.log(this);
//     return name;
// }
// screamName('Justin')

// code example for Window Binding

// Principle 2

// const justinObj = {
//     greeting: 'Hola',
//     screamHello: function (name) {
//         console.log(`${this.greeting} my name is ${name}`);
//         console.log(this);
//     }
// };

// justinObj.screamHello('justin');

// code example for Implicit Binding

// Principle 3

// function CordialPerson(greeter) {
//     this.greeting = 'Hola ';
//     this.greeter = greeter;
//     this.speak = function () {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     };
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// jerry.speak();
// newman.speak();

// code example for New Binding

// Principle 4

function poo() {
    console.log(this.name);
}
var dog = {
    name: 'Ryder'
}

greet.call(person, arg1, arg2, arg3)

// code example for Explicit Binding