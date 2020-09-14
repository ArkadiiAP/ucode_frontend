let checkBrackets = (str) => {
    let y = 0, x = 0;
    if(typeof(str) == 'string'){
        for(let i = 0; str[i]; i++){
            if(str.charAt(i) == `(`){
                x++;
            }
            if(str.charAt(i) == `)`){
                x ? x-- : y++;
            }
        } return x + y;
    } return -1;
}
console.log(checkBrackets('1)()(())2(()'));
console.log(checkBrackets(NaN));
console.log(checkBrackets("(1 + 2 * 4"));