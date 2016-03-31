var even = function(num){
  if(num === 1 || num === -1 || num === 0){
    return num === 0;
  }
  return even(num%2);
};

var even = function(num){
  if(num === 1 || num === 0){
    return num === 0;
  }
  if(num>=0){
    return even(num - 2);
  }
  if(num<0){
    return even(num + 2);
  }
};
