var map = function(array, callback){
  var res = [callback(array[0])];
  if(array.length === 1){
    return res;
  }
  return res.concat(map(array.slice(1),callback));
};


