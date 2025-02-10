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
    for(let i=0;i<nums.length;i++) {
        if(frequencyMap.has(nums[i])) {
            const curFrequencyOfNumber = (frequencyMap.get(nums[i]) ?? 0) + 1;
            frequencyMap.set(nums[i], curFrequencyOfNumber);
        } else {
            frequencyMap.set(nums[i], 1);
        }
    }
    const priorityQueue: number[] = [];
    frequencyMap.forEach((value, key, map) => {
        if(priorityQueue.length < k) {
            priorityQueue.push(key);
        } else {
            const firstElement = priorityQueue[0];
            const curFreqForFirstElement = frequencyMap.get(firstElement) || 0;
            if(value > curFreqForFirstElement) {
                priorityQueue.shift();
                priorityQueue.push(key)
            }
        }
    })

    return priorityQueue;
}

export {
    getTopKFrequentElementsFromArray
}