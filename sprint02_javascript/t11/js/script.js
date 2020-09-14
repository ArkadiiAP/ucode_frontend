var x = parseInt(prompt("Enter number", ''));
var i = 0;
res = "";
    while (i < 11) {
      res += x + "*" + i + "=" + Number(x) * i + "\n";
      i++;
    }
    alert(res);
