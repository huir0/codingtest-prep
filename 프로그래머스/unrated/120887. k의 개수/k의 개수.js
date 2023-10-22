function solution(i, j, k) {
    var answer = 0;
    for (let s = i; s <= j; s++) {
        let num = s.toString().split('');
        num.forEach(e => {
            if (e === k.toString()) return answer++;
        }); 
    }
    return answer;
}