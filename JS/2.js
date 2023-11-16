function task2() {
  a = [2, 1, 17, 7, 9, 23, 2];
  res = a.reduce(function (count, elem) {
    if (elem > 0 && elem < 10) count+=elem;
    return count;
  }, 0);
  console.log(res);
}

task2();
