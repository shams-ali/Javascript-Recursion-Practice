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
