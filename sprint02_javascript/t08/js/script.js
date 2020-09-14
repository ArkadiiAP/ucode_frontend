var x = prompt("Enter number form 1 to 4", '');
var res;
if (isNaN(x)||x<=0||x>4){
    alert("Wrong input");
}else if (x == 1){
    res = x * 2 / 'a';
    alert(res + " input = 1");
}else if (x == 2){
    res = (x - x) / 0;
    alert(res + " input = 2");
}else if (x == 3){
    res = 0 * Infinity;
    alert(res + " input = 3");
}else if (x == 4){
    res = x * 40000000;
    alert((res > Infinity) + " input = 4");
}