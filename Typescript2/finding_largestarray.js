var arr = [23, 89, 6, 29, 56, 45, 77, 32];
function maximum(no) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(max);
    return max;
}
maximum([23, 89, 6, 29, 56, 45, 77, 32]);
