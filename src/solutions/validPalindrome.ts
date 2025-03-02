/**
 * 125. Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 */

const isSentenceAPalindrome = (inputStr: string) => {
  const isLetterOrNumber = (inputChar: string) => {
    const charCode = inputChar.charCodeAt(0);
    return (
      (charCode >= 48 && charCode <= 57) || // numbers 0-9
      (charCode >= 65 && charCode <= 90) || // uppercase A-Z
      (charCode >= 97 && charCode <= 122)
    ); // lowercase a-z
  };

  const charQueue = new Array();

  let isValid = true;

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] && isLetterOrNumber(inputStr[i])) {
      charQueue.push(inputStr[i].toLowerCase());
    }
  }

  let lastCharIndex = charQueue.length - 1;
  for (let i = 0; i < charQueue.length; i++) {
    if (charQueue[i] !== charQueue[lastCharIndex]) {
      isValid = false;
      break;
    } else {
      lastCharIndex--;
    }
  }

  return isValid;
};

export { isSentenceAPalindrome };
