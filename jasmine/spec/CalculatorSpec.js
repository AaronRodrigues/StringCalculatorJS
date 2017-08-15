describe("String Calculator",  function(){
  var calculator;


  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it("should return zero when '' is passed", function(){
    expect(calculator.add('')).toEqual(0);
  });

  it("should return the number itself when a single number is passed", function(){
    expect(calculator.add('1')).toEqual(1);
  });
});