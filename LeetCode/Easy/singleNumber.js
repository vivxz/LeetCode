/*
Given a non-empty array of integers, every element appears twice except 
for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you 
implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (var key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};