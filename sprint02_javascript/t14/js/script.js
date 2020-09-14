var sum1;
function total(addCount, addPrice, currentTotal) {
    if (currentTotal == undefined) {
        currentTotal = Number(0);
    }
    sum1 = Number.parseFloat(addCount) * Number.parseFloat(addPrice) + Number.parseFloat(currentTotal);
    return Number.parseFloat(sum1).toFixed(2);
}