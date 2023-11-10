const reduceArray = (arr) => {
  let newArray = [...arr];
  let tempArray = [];
  let i = 0;
  let lastArray = [];

  // for(i; i < newArray.length; i ++){
  do {
    if(typeof newArray[i] === 'object' ){
      let alou = [];
      if (newArray[i].length > 1){
        [alou, ...rest] = newArray[i];
        newArray = [];
        newArray.push(alou);
        newArray.push(rest);
        lastArray = [...newArray];
      } else {
        newArray = newArray[i];
      }
      i = 0;
      continue;
    }
    tempArray.push(newArray[i]);
    console.log(tempArray);
    if (newArray === lastArray[0]) newArray = [...lastArray];
    i++
  } while ( i < newArray.length);
}

reduceArray([1, 2, [3, 4,[[5], 6, 7, [[8]], [9, 10, [11]]]]]);
