function StringCalculator(){
}
StringCalculator.prototype.add = function(string_numbers) {
  this.number = string_numbers;

  if (this.number == '') {
    return 0;
  } else {
    return parseInt(this.number);
  }
};
