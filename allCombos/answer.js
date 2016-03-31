//with inner funcstion

var allCombos = function(array){
  var result = [[]];

  var buildResult = function(prefix, items) {
    for (var i = 0; i < items.length; i++) {
      result.push(prefix.concat(items[i]));
      buildResult(prefix.concat(items[i]), items.slice(i + 1));
    }
  };

  buildResult([], array);

  return result;
};

//no inner funciton

var allCombos = function (array){
  var res = [];
  if(array.length===0){
    res.push([]);
    return res;
  }
  for(var i = 0; i < array.length; i++){
    res.push([array[i]]);
    for(var j = i + 1; j < array.length; j++){
      res[i].push(array[j]);
    }
  }
  return res.concat(allCombos(array.slice(0,-1)));
};

console.log(allCombos(['a','b','c']));
