import React from 'react';

export const Els = function({number, ul, li1, li2, handler}){

  const boxes = items(number, li1, li2, handler);
  return (
    <ul style={ul}>
      {boxes}
    </ul>
  );
}


function items(num, style1, style2, handler){
  let i = 1;
  let arr = [];
  while ( i <= num) {
    arr.push(<li key={i.toString()} style={ i % 2 === 0 ? style1: style2} onClick={handler}>{i}</li>);
    i++;
  }
  return arr;
}
