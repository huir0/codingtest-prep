function solution(arr)
{
    var answer = [];
    answer.push(arr[0]);
    let i = 1;
    while (i < arr.length){
        let value = answer.pop();
        if (value !== arr[i]) {
            answer.push(value);
            answer.push(arr[i]);
        } else {
            answer.push(value);
        }
        i++;
    }
    
    return answer;
}