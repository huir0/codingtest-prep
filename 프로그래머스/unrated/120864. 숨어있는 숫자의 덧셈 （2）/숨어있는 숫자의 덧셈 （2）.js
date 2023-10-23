function solution(my_string) {
    var answer = 0;
    for (let i of my_string) {
        if (isNaN(i)) my_string = my_string.replaceAll(i, ' ');
    }
    my_string.split(' ').map(Number).forEach(e => {
        if (!isNaN(e)) answer += e;
    })
    return answer;
}