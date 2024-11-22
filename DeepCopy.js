// A deep copy creates a new object or array, including independent copies of nested objects or 
// arrays.Changes to the copied object do not affect the original.

// Original object
let original = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
};

// Create a deep copy using JSON
let deepCopy = JSON.parse(JSON.stringify(original));

// Modify the deep copy
deepCopy.address.city = "Los Angeles";

// Output
console.log("Original:", original);
console.log("Deep Copy:", deepCopy);
