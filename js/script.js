//#region destructuring

// #region object

// const user = {
//   id: 25,
//   isVerifield: true
// };

// const {id: number , isVerifield: isApproved} = user;

// console.log(number);
// console.log(isApproved);

// #endregion

// #region array

const numbers = ['one', 'two', 'three', 'four']

const [a, ...d] = numbers // [...rest]

console.log(a);
console.log(d);

// #endregion

// #region exchange of variable's values

// let a = 1;
// let b = 3;

// [a, b] = [b, a]

// console.log(a);
// console.log(b);

// #endregion

// #region function's arguments

// const student = {
//   direction : 'Programming',
//   displayName: 'jdoe',
//   fullName: {
//     firstName: 'John',
//     lastName:  'Doe'
//   }
// }

// function studentDirection({direction}){
//   return direction
// }

// console.log(studentDirection(student));

// function whois ({displayName, fullName: {firstName: name}}){
//   return `${displayName} is ${name}`
// }

// console.log(whois(student));


// #endregion

