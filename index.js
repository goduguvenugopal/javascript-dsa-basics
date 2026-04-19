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