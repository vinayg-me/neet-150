/**
 * Leetcode 242
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */
const getCharacterCountMap = (s: string) => {
  const characterCountMap: Record<string, number> = {};
  for (const character of s) {
    characterCountMap[character] = characterCountMap[character]
      ? characterCountMap[character] + 1
      : 1;
  }
  return characterCountMap;
};

const isValidAnagram = (s: string, t: string) => {
  if (s.length !== t.length) {
    return false;
  }
  // Go through s & t and store the count of characters O(n)
  const sCharacterCount: Record<string, number> = getCharacterCountMap(s);
  const tCharacterCount: Record<string, number> = getCharacterCountMap(t);

  let isInvalid = true;
  // Now compare if character counts are same
  Object.keys(sCharacterCount).forEach((character: string) => {
    if (!tCharacterCount[character]) {
      isInvalid = false;
      return;
    }
    if (tCharacterCount[character] !== sCharacterCount[character]) {
      isInvalid = false;
      return;
    }
  });
  return isInvalid;
};

export { isValidAnagram };
