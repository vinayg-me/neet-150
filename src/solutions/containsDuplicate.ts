/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1, 2, 3, 4]
Output: false

Example 2:

Input: [1, 2, 3, 1]
Output: true

*/

const containsDuplicate = (nums: number[]) => {
  if (!nums.length) {
    return true;
  }
  const numsDict: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numsDict[nums[i]]) {
      numsDict[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

export { containsDuplicate };
