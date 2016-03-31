var powersOfTwo = function(num){
  if(num === 1){
    return true;
  }
  if(num%2===1 || num === 0){
    return false;
  }
  return powersOfTwo(num/2);
};
