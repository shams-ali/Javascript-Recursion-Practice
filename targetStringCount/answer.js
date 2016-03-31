var targetCount = function(str, target){
  if(!str){
    return 0;
  }
  return str[0] === target ? 1 + targetCount(str.slice(1), target) :
    targetCount(str.slice(1),target);
};
