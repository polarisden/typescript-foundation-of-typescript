// function processData(data: unknown): string {
//   if(typeof data === 'string'){
//     return data.toUpperCase();
//   } else {
//     return "Not a string"
//   }
// }
function processData(data: unknown): string {
  return (typeof data === 'string') ? data.toUpperCase() : "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
/*
'data' is of type 'unknown'.
return data.toUpperCase();
*/