type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return  user.age ? user.age >= 18 : false
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// return user.age >= 18; เนื่องจาก user.age เป็น optional ซึ่งอาจจะไม่มีแล้วกลายเป็น undefined ได้