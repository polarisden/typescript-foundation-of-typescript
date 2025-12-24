function calculate(a: number, b: number, operator: string): number | string {
  //Start Coding Here
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if(b===0)return "cant devide by zero"
      return a / b;
    // case "mod":
    //   return a % b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 0, "divide")); // "cant devide by zero"
console.log(calculate(10, 5, "mod")); // "Invalid operator"
