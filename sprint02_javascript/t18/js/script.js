function sortEvenOdd(x) {
    x.sort(function (a, b){return (a % 2 - b % 2)||(a % 2 ? a - b:  a - b)})
}

