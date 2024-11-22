let person = { 
    name: "John",
     age: 25,
    profile: "student" 
};

for (let key in person) {
    console.log(key);
    // console.log(person); 
    // console.log(key + ": " + person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
// Object Methods
// Object.keys(obj): Returns an array of keys.
// Object.values(obj): Returns an array of values.
// Object.entries(obj): Returns an array of key-value pairs.