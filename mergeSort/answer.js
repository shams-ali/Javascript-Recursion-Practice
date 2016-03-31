var mergeSort = function (array) {
  if (array.length <= 1)
  {
    return array;
  }
  var half = parseInt(array.length / 2);
  var left = mergeSort(array.slice(0, half));
  var right = mergeSort(array.slice(half, array.length));
  var merge = function (left, right){
    var res = [];
    while (left.length > 0 && right.length > 0){
      if(left[0] <= right[0]){
        res.push(left.shift());
      }else{
        res.push(right.shift());
      }
    }
    return res.concat(left).concat(right);
  };
  return merge(left, right);
};
