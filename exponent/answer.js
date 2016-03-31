var exponent = function(base, power){
  if(power === 0){
    return 1;
  }
  return base * exponent(base, power-1);
};
