/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
            Since 2 has only one digit, return it.
*/

// var addDigits = function(num) {
//   if (num > 9) {
//     var sum = 0;
//     num = num.toString();
//     for (var i = 0; i < num.length; i++){
//       sum += Number(num[i]);
//     }
//     return addDigits(sum);
//   } 
//   return num;
// };

var addDigits = function (num) {
  if (num === 0) {
    return 0;
  }
  return (num % 9 === 0) ? 9 : num % 9;
};