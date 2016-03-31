var sort = function(array){
  var min = Math.min.apply(Math, array);
  var res = [min];
  array.splice(array.indexOf(min),1);
  if(array.length === 0){
    return res;
  }
  return res.concat(sort(array));
};
