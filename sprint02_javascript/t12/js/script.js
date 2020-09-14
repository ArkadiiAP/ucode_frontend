var x = prompt("Enter some", '');
var res = "";
for (var i = 0; i < x.length; i++){
    var star = i + 1;
    while (star != 0){
        res += "*";
        star--;
    }
    res += "\n";
}
alert(res);