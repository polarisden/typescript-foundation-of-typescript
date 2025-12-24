type User = {
  id: string;
  name: string;
  age?: number; // Optional
};

function isAdult(user: User): boolean {
  // Error เดิม: Object is possibly 'undefined'.
  // แก้ไข: เช็คว่ามี age ไหม ถ้าไม่มีให้ถือว่าเป็นเท็จ หรือใช้ ?? (Nullish coalescing)
  // โจทย์บอก: คืนค่า false หาก user.age ไม่มีค่า
  return (user.age ?? 0) >= 18; 
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // false