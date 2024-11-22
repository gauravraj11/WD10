let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
];
users.forEach((user) => console.log(user.name)); // Output: John, Jane


let orders = [
    { id: 1, product: "Book", price: 15 },
    { id: 2, product: "Pen", price: 2 },
];
let total = orders.reduce((sum, order) => sum + order.price, 0);
console.log(total); // 17