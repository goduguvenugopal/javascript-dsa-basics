## 🎯 **Day 1 – Simple Number Problems**

### 🧩 **Core Concept Focus**

* Loops (`for`, `while`)
* Simple arithmetic operations
* Thinking in steps (pattern of input → logic → output)

---

### 🧠 **Questions List**

1. **Print Numbers from 1 to N**

   * Input: `5`
   * Output: `1 2 3 4 5`
   * ✨ *Teaches basic loop construction.*

2. **Print Numbers from N to 1 without changing the loop condition of above question**

   * Input: `5`
   * Output: `5 4 3 2 1`
   * ✨ *Thinking creatively and manipulating logic within the loop*

3. **Print All Even Numbers from 1 to N**

   * Input: `10`
   * Output: `2 4 6 8 10`
   * ✨ *Introduces conditional checks inside loops.*

4. **Sum of First N Natural Numbers**

   * Input: `5`
   * Output: `15`
   * ✨ *Encourages cumulative addition and variable usage.*

5. **Product (Factorial) of N**"

   * Input: `5`
   * Output: `120`
   * ✨ *Reinforces loop control with multiplication logic.*

6. **Sum of All Even Numbers up to N**

   * Input: `10`
   * Output: `30` (`2+4+6+8+10`)
   * ✨ *Combines loops + condition + accumulation.*

7. **Print Squares of Numbers from 1 to N**

   * Input: `5`
   * Output: `1 4 9 16 25`
   * ✨ *Introduces arithmetic pattern generation.*


   Here’s a **well-designed Homework / Practice Challenge** set for **Day 1 – Simple Number Problems**, written in the same clean markdown format and aligned with the day’s learning goals 👇

---

### 🏠 **Homework / Practice Challenge**

1. **Print all numbers divisible by 3 and 5 up to N**

   * Input: `30`
   * Output: `15 30`
   * ✨ *Reinforces conditional checks inside loops.*

---

2. **Find the sum of all odd numbers up to N**

   * Input: `10`
   * Output: `25` (`1 + 3 + 5 + 7 + 9`)
   * ✨ *Combines looping with conditional accumulation.*

---

3. **Print the cubes of numbers from 1 to N**

   * Input: `5`
   * Output: `1 8 27 64 125`
   * ✨ *Extends arithmetic pattern logic beyond squares.*

---

4. **Print only the numbers that are both even and perfect squares**

   * Input: `1 to 20`
   * Output: `4 16`
   * ✨ *Encourages combining two conditions within one loop.*


## 🎯 **Day 2 – Conditions & Logic**

### 🧩 **Core Concept Focus**

* Conditional statements (`if`, `else if`, `else`)
* Comparison and logical operators
* Decision making based on different inputs
* Strengthening flow-of-control understanding

---

### 🧠 **Questions List**

1. **Find the Maximum of Three Numbers**

   * Input: `10 20 5`
   * Output: `20`
   * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*


---

2. **Check if a Number is Positive, Negative, or Zero**

   * Input: `-9`
   * Output: `Negative`
   * ✨ *Practices multi-branch conditions and comparison operators.*

---


3. **Calculate Electricity Bill**

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
* 🔍 *Teaches:* cumulative calculation + condition chaining.

---

4. **Check if a Character is a Vowel or Consonant**

   * Input: `e`
   * Output: `Vowel`
   * ✨ *Combines logical OR (`||`) operator and string comparisons.*

---

5. **Check if a Year is a Leap Year**

   * Input: `2024`
   * Output: `Leap Year`
   * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

   A year is a **leap year** if it satisfies these conditions:

   1. It is **divisible by 4**,  
      ➜ `year % 4 === 0`
   2. **But not divisible by 100**,  
      ➜ `year % 100 !== 0`
   3. **Unless** it is also **divisible by 400**,  
      ➜ `year % 400 === 0`

   🧩 **In Simple Words**
   - If a year is divisible by **4**, it’s a leap year.  
   - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
   - **But** if it’s divisible by **400**, it **is** a leap year again.

---

### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

   * Input: `A`
   * Output: `Uppercase Letter`
   * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
   * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

---

2. **Check Triangle Type Using Sides and Angles**

* **Input:** `Sides = 3, 4, 5`
* **Output:** `Right-Angled Triangle`
* ✨ *Combines geometric reasoning + Pythagoras theorem check.*
* Example Logic:

  * If `a² + b² = c²` → Right-angled
  * Else if all sides equal → Equilateral
  * Else if any two equal → Isosceles
  * Else → Scalene

---

3. **Calculate Income Tax Based on Slabs**

* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹62,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*



## 🎯 **Day 3 – Loops & Patterns**

### 🧩 **Core Concept Focus**

* Nested Loops
* Pattern Printing with Logic and Symmetry
* Understanding iteration depth for shapes and designs

---

### 🧠 **Questions List**

1. **Print Right-Angled Star Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     *
     **
     ***
     ****
     *****
     ```
   * ✨ *Teaches nested loops and increasing sequence printing.*

---

2. **Print Inverted Right-Angled Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     *****
     ****
     ***
     **
     *
     ```
   * ✨ *Reinforces decreasing nested loop structure.*

---

3. **Print Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *
        ***
       *****
      *******
     *********
     ```
   * ✨ *Teaches alignment using spaces and nested loops.*

---

4. **Print Inverted Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *******
       *****
        ***
         *
     ```
   * ✨ *Teaches reverse space-star pattern alignment.*

---

5. **Print Hollow Square Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *****
     *   *
     *   *
     *   *
     *****
     ```
   * ✨ *Practices conditional printing within nested loops.*

---

6. **Print Hollow Pyramid Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *
        * *
       *   *
      *     *
     *********
     ```
   * ✨ *Combines conditionals and symmetrical logic in loops.*

---

7. **Print Alternating Binary Triangle**

   * Input: `Rows = 5`
   * Output:

     ```
     1
     0 1
     1 0 1
     0 1 0 1
     1 0 1 0 1
     ```
   * ✨ *Combines parity logic with nested loops.*

---

### 🏠 **Homework / Practice Challenge**

1. **Print Hollow Inverted Pyramid**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *     *
       *   *
        * *
         *
     ```
   * ✨ *Focuses on conditionally printing edges and spaces.*

---

2. **Print Butterfly Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *       *
     **     **
     ***   ***
     **** ****
     *********
     **** ****
     ***   ***
     **     **
     *       *
     ```
   * ✨ *Combines multiple sections with symmetry logic.*

---

3. **Print Diamond Pattern**

   * Input: `Rows = 3`
   * Output:

     ```
         *
        ***
       *****
        ***
         *
     ```
   * ✨ *Combines upper and lower pyramid logic for symmetry.*

---

4. **Print Hourglass Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
     *********
      *******
       *****
        ***
         *
        ***
       *****
      *******
     *********
     ```
   * ✨ *Practices combining inverse loops and symmetrical shapes.*

---

5. **Print Hollow Diamond Pattern**

   * Input: `Rows = 3`
   * Output:

     ```
         *
        * *
       *   *
        * *
         *
     ```
   * ✨ *Teaches combining upward and downward hollow pyramids.*

---

6. **Print Rhombus Pattern**

   * Input: `Rows = 5`
   * Output:

     ```
         *****
        *****
       *****
      *****
     *****
     ```
   * ✨ *Practices offset alignment for uniform patterns.*

   ---

7. **Print Multiplication Table (Single and Upto N)**

   * Input 1: `Number = 5`
   * Output:

     ```
     5 x 1 = 5
     5 x 2 = 10
     ...
     5 x 10 = 50
     ```
   * Input 2: `Upto = 3`
   * Output:

     ```
     Table of 1
     1 x 1 = 1
     ...
     Table of 3
     3 x 10 = 30
     ```
   * ✨ *Practices simple and nested loops for repetitive operations.*
