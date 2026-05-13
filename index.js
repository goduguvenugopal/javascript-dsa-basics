// 1.print numbers from 1 to N

// const  num = 10

// let numbersArray = []

// for(let i = 1 ; i <= num; i++ ){
// numbersArray.push(i)
// }

// const numInStr = numbersArray.join(",")

// console.log("user input numbers : " ,numInStr);

// 2.**Print Numbers from N to 1 without changing the loop condition of above question**

// const userInput = 10

// for(let i = 1; i <= userInput; i++ ){
//     console.log(userInput - i + 1);
// }

// 3. **Print All Even Numbers from 1 to N**

// const userInput = 100

// const evenNumbers = []
// const oddNumbers = []

// for(let num = 1; num <= userInput ; num++){
// if(num % 2 === 0){
//     evenNumbers.push(num)
// }else{
//     oddNumbers.push(num)
// }
// }

// console.log("Even Numbers : ", evenNumbers.sort((a , b)=> b - a));
// console.log("Odd Numbers : ", oddNumbers.toSorted());

// 4. **Sum of First N Natural Numbers**

// console.time()

// const userInp = 100

// let sumOfNum = 0

// for(let i = 0; i <= userInp; i++){
//     sumOfNum += i
// }

// console.log("sum of user input number : ", sumOfNum);
// console.timeEnd()

// optimized logic big o 1 time complexity

// There is a mathematical formula:

//             n(n + 1)
//   sum  =  -------------
//                2

// console.time()

// const userInput = 10000;

// const sum = (userInput * (userInput + 1)) / 2;

// console.log(sum);

// console.timeEnd()

// 5. **Product (Factorial) of N**"

// const userInput = 18;

// let FactorialNumbers = 1;

// for (let i = 1; i <= userInput; i++) {
//   FactorialNumbers *= i;
// }

// if (FactorialNumbers < Number.MAX_SAFE_INTEGER) {
//   console.log("Factorial numbers : ", FactorialNumbers);
// }

// 6. **Sum of All Even Numbers up to N**

//    * Input: `10`
//    * Output: `30` (`2+4+6+8+10`)
//    * ✨ *Combines loops + condition + accumulation.*

// const userInput = 10

// let sumOfEvenNum = 0

// for (let index = 1; index <= userInput; index++) {
//    if(index % 2 === 0){
//     sumOfEvenNum += index
//    }

// }

// console.log("Sum of Even Numbers : ", sumOfEvenNum);

// 7. **Print Squares of Numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 4 9 16 25`
//    * ✨ *Introduces arithmetic pattern generation.*

// const inp = 5;

// let square = 0;
// let odd = 1;

// for (let i = 1; i <= inp; i++) {
//     square += odd;
//     console.log(square);
//     odd += 2;
// }
// fast and reliable
// ⚡ Modern Alternative (Better than Math.pow())

// const n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(i ** 2);
// }

// const n = 5;

// const squares = [];

// for (let i = 1; i <= n; i++) {
//     squares.push(Math.pow(i, 2));
// }

// console.log(squares);

// Day 2

// 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*

// function findMaxNumber(a, b, c, isOptimize) {
//   let maxNumber;
//   if (isOptimize) {
//     const res = Math.max(a, b, c);
//     maxNumber = "Max number from Math.max() : " + res;
//   } else {
//     if (a >= b && a >= c) {
//       maxNumber = a;
//     } else if (b >= a && b >= c) {
//       maxNumber = b;
//     } else {
//       maxNumber = c;
//     }
//   }

//   console.log(maxNumber);
// }

// findMaxNumber(10, 110, 8, true);

// 2. **Check if a Number is Positive, Negative, or Zero**

//    * Input: `-9`
//    * Output: `Negative`
//    * ✨ *Practices multi-branch conditions and comparison operators.*

// function checkNumber(num = 0) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// // Example
// checkNumber(-1+1+1);  // Output: Negative

// 3. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

// function calculateElectricBill(units = 0) {
//   if (units <= 0) {
//     console.log("wrong units");
//     return 0;
//   }

//   let amount = 0;

//   if (units > 300) {
//     amount += (units - 300) * 12;
//     units = 300;
//   }

//   if (units > 200) {
//     amount += (units - 200) * 10;
//     units = 200;
//   }

//   if (units > 100) {
//     amount += (units - 100) * 7;
//     units = 100;
//   }

//   amount += units * 5;

//   return amount;
// }

// console.log("₹", calculateElectricBill(300)); // 2200

// // optimized production level logic
// const slabs = [
//   { limit: 100, rate: 5 },
//   { limit: 100, rate: 7 },
//   { limit: 100, rate: 10 },
//   { limit: Infinity, rate: 12 },
// ];

// function calculateBill(units) {
//   let amount = 0;

//   for (let slab of slabs) {
//     const used = Math.min(units, slab.limit);
//     amount += used * slab.rate;
//     units -= used;

//     if (units <= 0) break;
//   }

//   return amount;
// }

// console.log("₹", calculateBill(300)); // 2200

// 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`

//   const vowels = ["a", "e", "i", "o", "u"];

// function checkVowels(str) {
//   let accVowels = [];
//   let accConsonants = [];

//   const checkAlpha = /^[a-z]+$/i;

//   if (!checkAlpha.test(str)) {
//     console.log("Invalid input");
//     return;
//   }

//   const strToArray = str.toLowerCase().split("");

//   for (let i = 0; i < strToArray.length; i++) {
//     const currentLetter = strToArray[i];

//     if (vowels.includes(currentLetter)) {
//       accVowels.push(currentLetter);
//     } else {
//       accConsonants.push(currentLetter);
//     }
//   }

//   return { accVowels, accConsonants };
// }

// const result = checkVowels("venugopal");
// console.log(result);

// console.log("Vowels:", result.accVowels);
// console.log("Consonants:", result.accConsonants);

// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// 1. **Print Right-Angled Star Triangle**
//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```
//    * ✨ *Teaches nested loops and increasing sequence printing.*

// const row = 100;

// for (let i = 1; i <= row; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

// const row = 10;

// for (let i = 1; i <= row; i++) {
//   let str = "";
//   for (let j = 1; j <= row - i + 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// 3. **Print Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Teaches alignment using spaces and nested loops.*

//  const row = 6;

// for (let outLoop = 1; outLoop <= row; outLoop++) {

//   // spaces
//   let spaces = " ".repeat(row - outLoop);

//   // stars
//   let stars = "*".repeat(2 * outLoop - 1);

//   console.log(spaces + stars);
// }


