var palindrome = function(str){
  str = str.split(' ').join('');
  if(str.slice(0,1) != str.slice(-1)){
    return false;
  }
  if(str <= 1){
    return true;
  }else{
    str = str.slice(1,-1);
    return palindrome(str);
  }
};

