var begin = prompt("Enter number for beginning", 1);
var end = prompt("Enter number for end", 100);
const a = " -";
const b = " is even";
const c = " is a multiple of 3";
const d = " is a multiple of 10";
var out = "";
function checkDivision(beginRange, endRange){
    for (var i = beginRange; i <= endRange; i++){
        if (!(i % 2)){
            out = String(i + b);
        } else if ((i%3)&&(i%10)){
            out = String(i + a);
        } else  out = String(i);
        if (!(i % 3)&&!(i % 2)){
            out = String(out + ", " + c);
        } else if (!(i % 3)&&(i % 2)){
            out = String(out + c);
        }
        if (!(i % 10)){
            out = String(out + ", " + d)
        }
        if (i == 0){
            out = String(i + " null");
        }
        console.log(String(out));
    }
}
checkDivision(begin, end);