describe("checkBrackets", function(){
describe("Correct tests", function(){
  let test = [
    "()()()())", 1,
    "(((())", 2,
    "(asf)", 0,
    ")1231)(", 3,
    "(as14)", 0,
    ")qwq) r(", 3,
    ")12((3(14", 4,
    "(()(())())", 0,
    "sdf ) )  (af(", 4,
    "()", 0
  ];
  let CorrectTests = (value, result) => {
    it(`in "${value}" string have to add ${result} brackets`, function (){
        assert.equal(checkBrackets(value), result);
    });
  }
  for (let i = 0; test[i]; i += 2)
    CorrectTests (test[i], test[i + 1]);
});
describe("FailTests", function(){
  let failtest = [
    undefined,
    null,
    NaN,
    Number,
    Infinity
  ];
  let FailTests = (value) => {
    it(`for '${value}' return value is -1`, function(){
        assert.equal(checkBrackets(value), -1);
    });
  }
  for(let j = 0; j <= failtest.length; j++)
    FailTests(failtest[j]);
});
});
/*describe("checkBrackets", function () {
    describe("Correct tests", function () {
      let correctArray = [
        "1)()(())2(()", 2,
        "(1 + 2 * 4", 1,
        "(1)()(())2(()", 1,
        "Hello brackets)!", 1,
        "((()))", 0,
        "(((", 3,
        "))(", 1,
        "123", 0,
        "((((((((((((()))))))))))))", 0,
        "(Huyasya)(masyasya", 1,
        ")))", 3
      ];
  
      let makeCorrectTest = (value, result) => {
        it(`In "${value}" string have to add ${result} brackets`, function () {
          assert.equal(checkBrackets(value), result);
        });
      }
  
      for (let i = 0; correctArray[i]; i += 2)
        makeCorrectTest(correctArray[i], correctArray[i + 1])
    });
  
    describe("Incorrect tests", function () {
      let errorsArray = [
        undefined,
        null,
        NaN,
        123,
        ["))(", 1]
      ];
  
      let makeErrorTest = (value) => {
        it(`If income ${typeof value} return value is -1`, function () {
          assert.equal(checkBrackets(value), -1);
        });
      }
      for (let i = 0; i < errorsArray.length; i++)
        makeErrorTest(errorsArray[i]);
    });
  });*/