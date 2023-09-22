function solution(n, k) {
    var answer = 0;
    let arr = n.toString(k).split(0);
    let max = Math.sqrt(Math.max(...arr))+1;
    for (let i = 2; i < max; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (parseInt(arr[j]) !== i && parseInt(arr[j]) % i === 0) arr[j] = '' ;
            if (parseInt(arr[j]) === 1) arr[j] = '';
        }
    }
    arr.sort((a,b) => b-a);
    for (let i of arr) {
        if (i !== '') answer++;
        else break;
    }
    return answer;
}