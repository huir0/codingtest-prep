function solution(numbers) {
    var answer = 0;
    let arr = [];
    let n = numbers.length;
    const func = (p, numbers) => {
        if (p !== "") arr.push(parseInt(p));
        for (let i = 0; i < numbers.length; i++) {
            func(p + numbers[i], numbers.slice(0, i) + numbers.slice(i+1));
        }
    }
    func("", numbers);
    arr = new Set(arr);
    for (let n of arr) {
        if (n > 1) {
            let num = 2;
            let flag = true;
            while (num * num <= n) {
                if (n % num === 0) {   
                    flag = false;
                    break;
                }
                num++;
            }
            if (flag === true) {
                answer++;
            }
        }
    }
    return answer;
}
