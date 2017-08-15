describe("String Calculator",  function(){
  var calculator;


  beforeEach(function() {
    calculator = new StringCalculator();
  });

  it("should return zero when '' is passed", function(){
    calculator.add('');
    expect(calculator.add('')).toEqual(0);
  });
});