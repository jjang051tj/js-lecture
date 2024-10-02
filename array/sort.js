const nums = [12, 3, 23, 5, 35, 18, 48];
const words = ["가", "힣", "나", "banana", "apple", 1, 3, 11];
let i = 0;
words.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
  //return a - b;
});
console.log(words);
console.log(i);
