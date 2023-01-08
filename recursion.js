/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  
  /** time complexity O(n^2)
   * 
   *   if (nums.length === 0) return 1;
   *   return nums[0] * product(nums.slice(1));    
   */

  //time complexity O(n)
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
  }
  

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, wordLength=0) {
  if (i == words.length) return wordLength;
  wordLength = Math.max(words[i].length, wordLength);
  return (longest(words, i + 1, wordLength));

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, res = "") {
  if (i >= str.length) return res;
  res += str[i]
  return everyOther(str, i + 2, res);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=str.length-1, res="") {
  if (i < 0) return res === str;
  res += str[i];
  return isPalindrome(str, i - 1, res);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr[i] === val) return i;
  if (i == arr.length) return -1;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, res="") {
  if (i < 0) return res;
  res += str[i];
  return revString(str, i-1, res);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
    if (typeof obj[key] === "string") arr.push(obj[key]);
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// time complexity O(log n)
function binarySearch(arr, val, min = 0, max = arr.length-1) {
  if (max < min) return -1;

  let mid = Math.floor((min + max) / 2);
  if (val == arr[mid]) return mid;
  if (val < arr[mid]) return binarySearch(arr, val, min, mid - 1);
  if (val > arr[mid]) return binarySearch(arr, val, mid + 1, max);    
  }

/** Given a multi-dimensional integer array
 * return the total number of integers stored inside this array.
 * Given [[[5], 3], 0, 2, [], [4, [5, 6]]] => 7.
 */

function realSize(arrays) {
  // Force be with you, code warrior!
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (typeof(arrays[i]) === "number") sum = sum + 1;
    if (typeof (arrays[i]) === "object") sum += realSize(arrays[i]);
    

  }
  return sum;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  realSize
};

console.log(realSize([[1], 2, 3, [1, 2], 4]));