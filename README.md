# CoreCode-bootcamp-fullstack-2022-03-Challenges

`Week 1- Challenge-1.1 (Tuesday)`\
`Ensure question` \
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string 
```js
function ensureQuestion(s) {
    // Code here
    return s.trim().substr(-1) == "?" ? s : s+"?";
    
}
```

` Week 1 - Challenge-1.2 (Tuesday)` \
`Reversed Words` \
Complete the solution so that it reverses all of the words within the string passed in.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" 

```js
function reverseWords(str){
    const reverseArray=str.split(" ").reverse();
    return reverseArray.join(" "); // reverse those words
    
}
```
`Week 1 Challenge-2 (Wednesday)` \ 
`Find the smallest ingeger in the Array` \
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. 

```js
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
```

`Week 1 Challenge-3 (Thursday)` \ 
`OddorEven` \
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
```js
//Option 1
function oddOrEven(array) {
   let sum=0;
   for(let i=0;i<array.length;i++){
     sum+=array[i];
   }
   return sum%2 === 0 ? 'even' : 'odd' ;
 }
//Ootion 2
function oddOrEven1(array) {
    const sum=array.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0
    );
    
    return sum%2 === 0 ? 'even' : 'odd';    
}
//Option 3
function oddOrEven2(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)%2 === 0 ? 'even' : 'odd';    
}
```
`Week 2 Challenge-1 (Monday)` \ 
`Palindrome strings` \
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false 
```js
function isPalindrome(line) {
    return line.toString().split('').reverse().join('') === line.toString()? true:false;
}
```

`Week 2 Challenge-2 (Tuesday)` \
`Well of Ideas - Easy Version` \
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'. 

```js
function well(x){
  
    let counterGood=0;
    for(let i=0;i<x.length;i++){
      if(x[i].toString().toLowerCase().includes("good")){
        counterGood++;
      }
    }
    
    let result="Fail!";
    if(counterGood>0){
      result="Publish!";
      if(counterGood>2){
        result="I smell a series!";
      }
      
    }
    
    return result;
  }

  //option 2
  const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }

  //option 3
  function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
  }
  ```

` Week 2 Challenge-3 (Wednesday)`\ 
`Easter egg list in ReactJS`\

Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity 
```js
import React from 'react';

export const EggList = (props) => {
  const eggsComponent = (props.eggs.map((egg, index) => {
      return <EasterEgg 
          key={index}
          name={egg} 
          />//renderizacion dinamica 
      })
  );
  

  return (
      <ul>
        {eggsComponent}
      </ul>
  );  
};

export const EasterEgg = (props) => {
  <li>{props.name}</li>
};

```