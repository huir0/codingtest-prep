function solution(number, limit, power) {
    let answer = 0;
    let arr = Array(number).fill(1);
    for (let i = 2; i <= number; i++) {
        let j = 1;
        while (i*j <= number){
            arr[i*j-1]++;
            j++;
        }
    }
    arr.forEach(e=>{
        if (e > limit) answer += power;
        else answer += e;
    })
    return answer;
}