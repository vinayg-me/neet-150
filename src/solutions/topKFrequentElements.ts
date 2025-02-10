/**
 * Leetcode 347
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.   
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 *     
 */

const getTopKFrequentElementsFromArray = (nums: number[], k: number) => {
    const frequencyMap = new Map<number, number>();
    const result = new Set<number>;
    for(let i=0;i<nums.length;i++) {
        if(frequencyMap.has(nums[i])) {
            const curFrequencyOfNumber = (frequencyMap.get(nums[i]) ?? 0) + 1;
            result.add(nums[i])
            frequencyMap.set(nums[i], curFrequencyOfNumber);
        } else {
            frequencyMap.set(nums[i], 1);
        }
    }
    const sortedArray = Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);

    return sortedArray;
}

export {
    getTopKFrequentElementsFromArray
}