var A = {

    "key1" : "fghfhjgj",
    "key"  : "ghhghvbvhv",
    "key3" : "ghghjgjgjh"
}

console.log(A["key1"]);

for( let i in A){

    console.log(i , A[i]);
}

console.log(Object.keys(A))
console.log(Object.values(A))
console.log(Object.entries(A))
