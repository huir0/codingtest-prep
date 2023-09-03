function solution(numbers) {
    var answer = '';
    numbers.sort((a,b) => {
        let ab = a.toString() + b.toString();
        let ba = b.toString() + a.toString();
        return ba.localeCompare(ab);
    });
    if (numbers[0] === 0) {
        return '0';
    }
    numbers.forEach((e)=>{
        answer += e;
    })
    return answer;
}