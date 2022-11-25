/*Notes: 
    Date format -> MM/dd/YYYY
 */


/* Week 1 Challenge1 (Tuesday) -> 07/19/2022
Ensure question 
Given a string, write a function that returns the string with a question mark ("?") 
appends to the end, unless the original string ends with a question mark, in which case, 
returns the original string */
function ensureQuestion(s) {
    // Code here
    return s.trim().substr(-1) == "?" ? s : s+"?";
    
}

/* Week 1 Challenge1.1 (Tuesday) -> 07/19/2022
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */
function reverseWords(str){
    const reverseArray=str.split(" ").reverse();
    return reverseArray.join(" "); // reverse those words
    
}

/* Week 1 Challenge (Wednesday) -> 07/20/2022 
Find the smallest ingeger in the Array
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
/* Week 1 Challenge (Thursday) -> 07/21/2022 
OddorEven
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero). 
Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
//Option 1
function oddOrEven(array) {
    //enter code here
   let sum=0;
   for(let i=0;i<array.length;i++){
     sum+=array[i];
   }
   return sum%2 === 0 ? 'even' : 'odd' ;
 }
//Ootion 2
function oddOrEven1(array) {
    //enter code here
    const sum=array.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0
    );
    
    return sum%2 === 0 ? 'even' : 'odd';    
}
//Option 3
function oddOrEven2(array) {
    //enter code here
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)%2 === 0 ? 'even' : 'odd';    
}


