function processData(data: unknown): string {
  // Error เดิม: 'data' is of type 'unknown'.
  // แก้ไข: ใช้ Type Guard เช็คชนิดข้อมูลก่อนใช้งาน
  
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return "Not a string";
  }
  
  // กรณีเป็น Type อื่นๆ (ถ้ามี)
  return "Unknown data type";
}

console.log(processData("hello")); // "HELLO"
console.log(processData(123)); // "Not a string"