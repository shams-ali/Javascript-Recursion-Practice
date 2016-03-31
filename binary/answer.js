var binary = function(list, item){
  var half = parseInt(list.length/2);
  if(item === list[half]){
    return list[half];
  }
  if(item > list[half]){
    return binary(list.slice(half),item);
  }
  if(item < list[half]){
    return binary(list.slice(0,half),item);
  }
};
