// Shallow Copy: Only one level is copied.
// Deep Copy: Creates a full independent copy.

let obj = { a: 1, b: { c: 2 } };

let shallow = { ...obj };  // Shallow Copy

let deep = JSON.parse(JSON.stringify(obj)); // Deep Copy

console.log(shallow);

console.log(deep);

