var gcd = function(num1, num2){
  var test =  Math.min(num1, num2);

  function check(test){
      if(test === 1){
        return 1;
      }
      if(num1 % test === 0 && num2 % test === 0){
        return test;
      }

      test = test - 1;
      return check(test);
    }
    return check(test);

};

var gcd = function(num1,num2){
  if(num1%num2 === 0){
    return num2;
  }
  return gcd(num2,num1%num2);
};
