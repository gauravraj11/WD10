// var A = [11, 23, 45, "Gaurav", "Raj"];

// console.log(A);

// console.log(typeof A);

// var B = [11, 21, [211,31],99,[1,[2,3,[77,55]]],0]

// var res = B.flat(Infinity);

// console.log(res);

// var arr = [
//     11, 21, 211, 31, 99,
//      1,  2,   3, 77, 55,
//      0
//   ];
var arr = [1,2,3,4,4,3,2,1,0,9]
//   var res = arr.slice(2,7);

    // var res = arr.slice(3,7);

    // console.log(res);
    // console.log(arr);
    
  
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
    
    months.splice(3, 1, 'May', 'July','august','sept');
    // Replaces 1 or n element at index 4
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
    
