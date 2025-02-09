import { groupAnagrams } from "../solutions/groupAnagrams";
describe("Group Anagrams", () => {
  test("Positive test cases: Should return groups of anagrams in any order", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    
    // Sort each inner array and the outer array for consistent comparison
    const sortedResult = result
      .map(arr => arr.sort())
      .sort((a, b) => a[0].localeCompare(b[0]));
    
    expect(sortedResult).toEqual([
      ["ate", "eat", "tea"],
      ["bat"],
      ["nat", "tan"],
    ]);
  });

  test("Empty string: Should return single group with empty string", () => {
    const result = groupAnagrams([""]);
    expect(result).toEqual([[""]]); // Order doesn't matter for single group
  });

  test("Single character: Should return single group", () => {
    const result = groupAnagrams(["a"]);
    expect(result).toEqual([["a"]]); // Order doesn't matter for single group
  });

  test("Empty array: Should return empty array", () => {
    const result = groupAnagrams([]);
    expect(result).toEqual([]);
  });

  test("Multiple empty strings: Should group them together", () => {
    const result = groupAnagrams(["", "", ""]);
    expect(result).toEqual([["", "", ""]]);
  });
  
});
