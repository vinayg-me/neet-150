/**
 * Leetcode 49: Given an array of strings strs, group the anagrams together. You can return the answer in any order. 
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 */
import { isValidAnagram } from '../solutions/validAnagram';
const getLetterIndex = (char: string): number => {
    return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
}

const stringBuilder = (word: string) => {
    let stringCharacterArray = new Array(26)
    stringCharacterArray.fill(0, 0, 26)
    for(let character of word) {
        stringCharacterArray[getLetterIndex(character)] = 1;
    }
    return stringCharacterArray.toString();
}
const groupAnagrams = (inputStrs: string[]) => {
    const filledArrayMap: Record<string, string[]> = {};
    for(let i=0;i<inputStrs.length;i++) {
        const strs = inputStrs[i];
        let filledArray = stringBuilder(strs);
        const curValue = filledArrayMap[filledArray] ?? [];
        filledArrayMap[filledArray] = [...curValue, strs];
    }
    return Object.values(filledArrayMap);
}

export {
    groupAnagrams
}