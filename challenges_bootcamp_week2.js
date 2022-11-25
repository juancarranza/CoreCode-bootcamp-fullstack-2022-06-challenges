/* Week 2 Challenge-1 (Monday) -> 07/25/2022 
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false */
function isPalindrome(line) {
    return line.toString().split('').reverse().join('') === line.toString()? true:false;
}

/* Week 2 Challenge-2 (Tuesday) -> 07/26/2022 
Well of Ideas - Easy Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'. */

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

/* Week 2 Challenge-3 (Wednesday) -> 07/27/2022 
Easter egg list in ReactJS

Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity */

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
  return <li key={props.key}>{props.name}</li>;
};
/*
//solution example 1
import React from 'react';

export const EggList = ({eggs}) => {

  return (
    <ul>
    {eggs.map((item, key) => {
      return <EasterEgg key={key} name={item} />;
    })
    }
    </ul>
  );
  
};

export const EasterEgg = ({name}) => {
  return (
    <li>{name}</li>
  );
};

//solution example 2
import React from 'react';


export const EggList = (props) => {
  return <ul>{props.eggs.map((egg, index) => <EasterEgg key={index} name={egg}/>)} </ul>
};

export const EasterEgg = (props) => {
  const name = props.name;
  return( <li key={name} >{name}</li>)

};

//solution example 3
const React = require('react');

const EggList = ({eggs}) => {
  return <ul>{eggs.map((v, i) => <EasterEgg name={v} key={i} />)}</ul>;
};
 
const EasterEgg = ({name,key}) => {
  return <li key={key}>{name}</li>;
};

*/