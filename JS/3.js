function isChetn(arr) {
  return arr.every((elem) => elem%2==0);
}

let arr = [2,2,2];
console.log (isChetn(arr));
