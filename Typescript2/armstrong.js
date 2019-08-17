var chkArmstrong = function (no) {
    var no1 = no;
    var rem = 0;
    var res = 0;
    while (no1 > 0) {
        rem = Math.floor(no1) % 10;
        res += rem * rem * rem;
        no1 = Math.floor(no1) / 10;
    }
    if (no == res) {
        console.log("no is armstrong");
    }
    else {
        console.log(" no is nt armstrong");
    }
};
chkArmstrong(153);
