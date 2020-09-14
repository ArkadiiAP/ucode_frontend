function firstElements(arr, n) {
    if (n > arr.length){
        n = arr.length;
    }
    var newarr = [];
    while (n > 0){
        newarr[n-1] = arr[n-1];
        n--;
    }
    return newarr.valueOf();
}