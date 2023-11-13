const array = [1, 2, [3, 4,[[5], 6, 7, [[8]], [9, 10, [11]]]]];

const reduceArray = arr => {
  let arrTemp = [...arr];
  let arrFinal = [];
  let arrNovo = [];

  for(let i = 0; i < arrTemp.length; i++){
    if(typeof arrTemp[i] !== 'object' || typeof arrTemp[i] !== undefined) {
      if(arrNovo[0] !== undefined){
        for(let j = 0; j < arrNovo.length; j++)
        if(typeof arrNovo[j] !== 'object' || typeof arrNovo[i] !== undefined) {
          arrFinal.push(arrNovo[j]);
        }
      }
      arrFinal.push(arrTemp[i])

    } else if (typeof arrTemp[i] === 'object') {
      [arrNovo, ...arrTemp] = arrTemp[i];
      continue;
    }
  }
  console.log(arrFinal);
}

reduceArray(array);
