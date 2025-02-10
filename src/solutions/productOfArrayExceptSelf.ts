/**
 * Leetcode 238 (Mark for revisit):
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 ** Example 3:
 * Input: nums = [1,2]
 * Output: [2,1]
 *
 * Example 4:
 * Input: nums = [1,2,3,4,5]
 * Output: [120,60,40,30,24]
 *
 */

const getProductOfArrayExceptSelf = (nums: number[]) => {
  let prefixProduct = new Array();
  let postfixProduct = new Array();
  let answer = new Array();
  const lastIndex = nums.length ? nums.length - 1 : 0;

  const calculatePrefix = (index: number) => {
    const curProduct =
      index === 0 ? 1 : prefixProduct[index - 1] * nums[index - 1];
    return curProduct;
  };
  const calculatePostfix = (index: number) => {
    const curProduct =
      index === lastIndex ? 1 : postfixProduct[index + 1] * nums[index + 1];
    return curProduct;
  };
  for (let i = 0; i < nums.length; i++) {
    prefixProduct[i] = calculatePrefix(i);
  }
  for (let j = lastIndex; j >= 0; j--) {
    postfixProduct[j] = calculatePostfix(j);
  }
  for (let k = 0; k < nums.length; k++) {
    answer[k] = prefixProduct[k] * postfixProduct[k];
  }
  return answer;
};

export {
    getProductOfArrayExceptSelf
}

/**
 * TODO:
 *  While this solution meets the time complexity requirement of O(n), we can actually optimize the space complexity to O(1) (excluding the output array which is required). Here's how:
1. We can use the output array to store prefix products
2. Then we can use a single variable to keep track of the running postfix product
3. This way, we eliminate the need for separate prefix and postfix arrays
Would you like to see the space-optimized version of this solution?
 */
