var reverseString = function(str){
  if(!str){
    return "";
  }
  var sliced = str.slice(0,-1);
  return str.slice(-1) + reverseString(sliced);
};
