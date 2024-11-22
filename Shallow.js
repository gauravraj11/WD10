// A shallow copy creates a new object or array but copies only the references of nested objects/arrays. 
// It does not duplicate the inner objects or arrays themselves.

// Original object
let original = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
};

// Create a shallow copy
let shallowCopy = { ...original };

// Modify the shallow copy
shallowCopy.address.city = "Los Angeles";

// Output
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
