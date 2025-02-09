/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 */

const findTwoSum = (numArray: number[], target: number) => {
  if (numArray && numArray.length === 1) {
    return null;
  }
  
  const numMap = new Map<number, number>();
  
  for (let i = 0; i < numArray.length; i++) {
    const complement = target - numArray[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(numArray[i], i);
  }
  
  return [];
};

export {
    findTwoSum
}
