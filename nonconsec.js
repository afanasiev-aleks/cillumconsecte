const base = [1, 2, 3];
const value = [3, 4, 5, 3, 6];

let i = 0;
const n = value.length;

for (; i < n; ++i) {
  if (base.indexOf(value[i]) < 0) {
    base.push(value[i]);
  }
}

console.log(base); // Output: [1, 2, 3, 4, 5, 6]
