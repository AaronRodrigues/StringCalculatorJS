function StringCalculator(){
}
StringCalculator.prototype.add = function(string_numbers) {
  this.number = string_numbers;

  if (this.number == '') {
    return 0;
  } else if(this.number.length === 1) { 
    return (parseInt(this.number));
  } else {
    res = this.number.split(',');
    var total = 0;
    var arrayLength = res.length;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;   
  }
};
