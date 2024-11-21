const array = [2,5,9,12,4]

var result = array.reduce((accumulator, i, index)=>{
    

    console.log(i, index);
    
//  return accumulator= accumulator + i

},20)

console.log(result);











// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10
