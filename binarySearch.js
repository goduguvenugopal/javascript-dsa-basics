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
