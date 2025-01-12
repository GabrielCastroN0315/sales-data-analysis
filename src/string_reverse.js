function reverseString(str) {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i];
    }
    return inverted;
  }
  const inputString = "sales-data-analysis";
  const reversedString = reverseString(inputString);
  
  console.log(`Original string: ${inputString}`);
  console.log(`Reversed string: ${reversedString}`);
  