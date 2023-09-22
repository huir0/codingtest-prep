function solution(want, number, discount) {
    var answer = 0;
    if (Math.max(...number) > discount.length) return 0;
    let wish = {};
    for (let i = 0; i < want.length; i++) {
        wish[want[i]] = number[i];
    }
    
    for (let i = 0; i < discount.length-9; i++) {
        let basket = {...wish};
        for (let j of discount.slice(i,i+10)) {
            if (basket[j]) basket[j]--;
            if (basket[j] === 0) delete basket[j];
        }
        if (Object.keys(basket).length === 0) answer++;
    }
    return answer;
}