function dashInsert(str){
  var element = str.charAt(0);
  if(str.length === 1){
    return element;
  }
  if(+element%2===1){
    return element + "-" + dashInsert(str.slice(1));
  }
  return element + dashInsert(str.slice(1));

}
