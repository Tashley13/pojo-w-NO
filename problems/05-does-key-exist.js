/***********************************************************************
Write a function `doesKeyExist(obj, key)`
that takes in an object and a key
and returns true if the key is inside the object
and false if the key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// function doesKeyExist(obj, key) {
//   let keys = Object.keys(obj);
//     if (keys.includes(key)) {
//       return true
//   }
//   return false
// }

let doesKeyExist = (obj, key) => obj[key] !== undefined;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;clearInterval
