var range = function(num1, num2){
  var res = [num1 + 1];
  if(num1 + 1 === num2 - 1){
    return res;
  }else{
    return res.concat(range(num1+1, num2));
  }
};
