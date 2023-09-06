function solution(n) {
    let nCount = n.toString(2).split("1").length;
    while (true) {
        n++;
        if (nCount === n.toString(2).split('1').length) {
            return n;
        }
    }
}