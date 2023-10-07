function solution(my_string) {
    let answer = [];
    my_string = my_string.split(' ');
    for (let i of my_string) {
        if (i !== '') answer.push(i)
    }
    return answer;
}