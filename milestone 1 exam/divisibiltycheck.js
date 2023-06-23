const numbers = [2, 3, 4, 6, 9, 12, 15, 18, 21];

for (const number of numbers) {
  if (number % 3 !== 0 || number % 2 === 0) {
    continue;
  }
  
  console.log(number);
}
