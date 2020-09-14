function solver(a, b, c, d, e) {
  var x = a ** 2 - 5 * b * c + d / 3 + e;
  var err = "Wrong input";
  if((typeof (a) != 'number')||(typeof (b) != 'number')||(typeof (c) != 'number')||(typeof (d) != 'number')||(typeof (e) != 'number')){
    return err;
  }else return x.toFixed(2);
}