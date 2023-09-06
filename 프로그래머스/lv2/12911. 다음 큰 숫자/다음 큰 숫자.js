function solution(n) {
    let nCount = n.toString(2).split("1").length - 1;
    while (true) {
        n++;
        if (nCount === n.toString(2).split('1').length - 1) {
            return n;
        }
    }
}