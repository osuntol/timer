var arrayOfNumbers = [1,5]

timer = (arg) => {
  for (let number of arg) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
    if (number <= 0) {
      continue
    }
    if (number === NaN) {
      continue
    }
  }
}
timer (arrayOfNumbers)