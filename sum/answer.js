var sum = function(array){
  if(array.length === 0){
    return 0;
  }
  return array.pop() + sum(array);
};
