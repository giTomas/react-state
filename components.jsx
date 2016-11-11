import React from 'react';

export const Els = function({number, ul, li1, li2, handler, mod}){
  //const boxes = items(number, li1, li2, handler, mod);
  return (
    <ul style={ul}>
      {items(number, li1, li2, handler, mod)}
    </ul>
  );
}


export const Els2 = function({array, ul, li1, li2, handler, mod}){
  //const boxes = items2(array, li1, li2, handler, mod);
  return (
    <ul style={ul}>
      {items2(array, li1, li2, handler, mod)}
    </ul>
  );
}


function items(num, style1, style2, handler, mod){
  let i = 1;
  let arr = [];
  while ( i <= num) {
    arr.push(<li
      id={i}
      key={i.toString()}
      style={i % 2 === 0 ? style1 : style2}
      onClick={handler}>{i}
    </li>);
    i++;
  }
  return arr;
}


function items2(arr, style1, style2, handler) {
  if (arr.length === 0) {
    return;
  }

  return arr.map((item, i) => <li
    id={item}
    key={item.toString()}
    style={i % 2 === 0 ? style1: style2}
    onClick={handler}>{item}
  </li>);

}
