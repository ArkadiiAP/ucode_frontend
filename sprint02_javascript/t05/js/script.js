var str1 = "You\'re catnip to a girl like me. Handsome, dazed, and to die for...";
var str2 = "Batman: \"I tried to save you.";
var str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\"";
function length(a){
  return "Length: " + a.length;
}
function charNumber(b){
  return "Character number " + b + " is: " + str1.charAt(b);
}
function upperCase(c){
  return "To uppercase " + c.toUpperCase();
}
function concat(d){
  var msg1 = "Concatenation in a phrase: "
  var msg2 = " - Catwoman";
  var x = msg1.concat(d);
  return x.concat(msg2);
}
function concatBatman(e){
  var msg1 = "[Batman Returns] ";
  return msg1.concat(e);
}
function replace(f){
  const regex = /catwoman/gi;
  return f.replace(regex, " ");
}
alert("Just string: " + str1 + "\n" + length(str1) + "\n" + charNumber(2) + "\n" + upperCase(str1) + "\n" +
  concat(str1) + "\n" + concatBatman(str2) + "\n" + replace(str3));