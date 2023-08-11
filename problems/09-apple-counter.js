/***********************************************************************
Write a function `appleCounter(appleObj)`
that takes in an object containing a  number of keys that have the word 'apple' contained within them.
The `appleCounter` function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


***********************************************************************/
/*
declare a function
create a count variable
for in loop to grab keys
conditional if statement checking keys for apple (.includes)
increment count ++
return count
*/
function appleCounter(appleObj) {
  let count=0
  for (let keys in appleObj) {
    if (keys.toLowerCase().includes('apple')) {
        count ++
    }
  }return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
