// // linear search

// const targetNum = 18;

// const arr = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 17, 18, 20, 22, 34, 50];

// const findNum = (arr, targetNum) => {
//   targetNum = Math.abs(targetNum);

//   for (let i = 0; i < arr.length ; i++) {
//     if (arr[i] === targetNum) {
//       return i;
//     }
//   }
//   return -1;
// };

 
// console.log(arr[findNum(arr, targetNum)]);

// // Binary Search

// const targetInput = 20;

// const arr = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 17, 18, 20, 22, 34, 50];

// function findNumber(arr, targetInput) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = Math.floor(left + right / 2);
//     console.log(
//       "middle index",
//       middle,
//       " : middle index of element",
//       arr[middle],
//     );

//     if (arr[middle] === targetInput) {
//       return middle;
//     } else if (arr[middle] < targetInput) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }

//   return -1;
// }

// console.log(findNumber(arr, targetInput));


// Bubble sort 
 
// const arr = [2, 3, 4, 5, 1, 7];

// const sortTheArray = (arr) => {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// };

// console.log(sortTheArray(arr));
// // [1, 2, 3, 4, 5, 7]



