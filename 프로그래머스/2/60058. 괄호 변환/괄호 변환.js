function solution(p) {
    if (p === '') return '';
    let answer = '';
    while (p.length) {
        let count = 0;
        let pivot= 0;
        do {
            if (p[pivot++] === '(') count++;
            else count--;
        } while (count !== 0);

        let u = p.slice(0, pivot);
        let v = p.slice(pivot);

        if (u[0] === '(' && u[u.length - 1] === ')') {
            answer += u;
            p = v;
        }
        else {
            answer += '(' + solution(v) + ')' + u.slice(1, u.length - 1).split('').map(e=>e === '(' ? ')' : '(').join('');
            break;
        }
    }
    return answer;    
}