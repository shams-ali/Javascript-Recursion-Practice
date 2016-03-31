var primes = function(num){
  function recursion(check){
      var resFactors = [];
      for(var i = 2; i<check; i++){
        if(check % i === 0){
          var num1 = i;
          var num2 = check/i;
          resFactors.push(num1,num2);
          break;
        }
      }
      return resFactors;
  }

  //creat all prime factors array
  var res = recursion(num);
  //case for primes
  if(!res.length){
    return "(" + num + ")";
  }

  for(var i = 0; i < res.length; i++){
    if(recursion(res[i]).length){
      var temp = recursion(res[i]);
      res.splice(res.indexOf(res[i]), 1 , temp);
      res = [].concat.apply([], res);
    }
  }

  //create key value pairs
  var obj = {};
  for(var j = 0; j < res.length; j++){
      if(!obj[res[j]]){
        obj[res[j]] = 1;
      }else{
        obj[res[j]]++;
      }
  }

  //put in string format
  var str = "";
  for(var prop in obj){
    if(obj[prop] === 1){
       str += "(" + prop.toString() + ")";
    }else{
      str += "(" + prop.toString() + "**" + obj[prop].toString() + ")";
    }
  }
  return str;
};

var primes = function(num){
  if(num <= 1){
    return [];
  }
  if(typeof num==="number"){
    num = [num];
  }
  if(num.some(function(value){
    return value % 2 === 0 && value != 2 || value % 3 === 0 && value != 3;
  })){
    num = num.reduce(function(prev,curr){
        if(curr % 2 === 0 && curr !== 2){
          prev.push(2, curr/2);
        }else if(curr % 3 === 0 && curr != 3){
            prev.push(3, curr/3);
        }else{
          prev.push(curr);
        }
      return prev;
    },[]);
    return primes(num);
  }
  return num;
};
