/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
 */

var findKthLargest = function(nums, k) {
  var sorted = nums.sort((a,b) => (b-a));
  return sorted[k - 1];
};
