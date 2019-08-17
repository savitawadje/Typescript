function maximum(no) {
    var temp;
    for (var i = 0; i < no.length; i++) {
        for (var j = i + 1; j < no.length; j++) {
            if (no[i] < no[j]) {
                temp = no[i];
                no[i] = no[j];
                no[j] = temp;
            }
        }
    }
    console.log("second largest no is : " + no[1]);
}
maximum([23, 89, 6, 29, 56, 45, 77, 32]);
