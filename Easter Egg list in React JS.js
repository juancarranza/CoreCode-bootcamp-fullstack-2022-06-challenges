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