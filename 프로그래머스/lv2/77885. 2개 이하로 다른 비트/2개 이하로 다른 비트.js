function solution(numbers) {
    var answer = [];
    for (let i of numbers) {
        if (i % 2 === 0) answer.push(i+1);
        else {
            let bit = "0" + i.toString(2);
            let index = bit.lastIndexOf("0");
            answer.push(parseInt(bit.substring(0,index)+"10"+bit.substring(index+2),2))
        }
    }
    return answer;
}