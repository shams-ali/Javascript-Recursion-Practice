var numToText = function(str2){
  var objText = { 1: "one",
                      2: "two",
                      3: "three",
                      4: "four",
                      5: "five",
                      6: "six",
                      7: "seven",
                      8: "eight",
                      9: "nine" };

    var res = '';
    if(str.length === 0){
      return res;
    }else{
      if(objText.hasOwnProperty(str[0])){
          res += objText[str[0]];
      }else{
         res += str[0];
      }
      return res + numToText(str.slice(1));
    }
};
