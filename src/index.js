
exports.min = function min (array) {
  if (array !== undefined && array.length) {
    let min=array[0];
    for (let i=1; i<array.length; i++){
        if (array[i] < min){
          min = array[i];
        }
    }
    return min;
  }
  return 0;
}

exports.max = function max (array) {
  if (array !== undefined && array.length){
      let max=array[0];
      for (let i=1; i<array.length; i++){
        if (array[i] > max){
          max = array[i];
        }
      }
    return max;
  } 
    return 0;
  
}

exports.avg = function avg (array) {
  if (array !== undefined && array.length) {
    let sum=0;
    for (let i=0; i<array.length; i++){
        sum+= array[i];
    }
  
   
    return sum/array.length;
  } 
  return 0;
}
