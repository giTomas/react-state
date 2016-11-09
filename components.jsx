import React from 'react';

export const Els = function({number, ul, li, handler}){

  const boxes = items(number, li, handler);
  return (
    <ul style={ul}>
      {boxes}
    </ul>
  );
}


function items(num, style, handler){
  let i = 1;
  let arr = [];
  while ( i <= num) {
    arr.push(<li key={i.toString()} style={style} onClick={handler}>{i}</li>);
    i++;
  }
  return arr;
}
