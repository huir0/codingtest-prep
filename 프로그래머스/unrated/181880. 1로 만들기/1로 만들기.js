function solution(num_list) {
    var answer = 0;
    num_list.forEach(e => {
        while (e !== 1) {
            if (e % 2 === 0) {
                e /= 2;
            } else {
                e -= 1;
                e /= 2;
            }
            answer++;
        }
    })
    return answer;
}