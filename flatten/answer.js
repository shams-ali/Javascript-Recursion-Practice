var flatten = function(array){
  if(array.some(function(value){
    return Array.isArray(value);
  })){
    array = array.reduce(function(prev, curr){
      prev = prev.concat(curr);
      return prev;
    },[]);
    return concat(array);
  }
  return array;
};
