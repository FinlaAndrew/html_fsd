function romanToNumber(romanNumeral) {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    };
    
    let total = 0;
    let previousValue = 0;
    
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[romanNumeral[i]];
      
      if (currentValue < previousValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
      
      previousValue = currentValue;
    }
    
    return total;
  }
  console.log(romanToNumber("V")); // Output: 5
  console.log(romanToNumber("IX")); // Output: 9
  console.log(romanToNumber("MCMXCIV")); // Output: 1994
    