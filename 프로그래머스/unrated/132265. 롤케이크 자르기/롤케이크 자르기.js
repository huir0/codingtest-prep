function solution(topping) {
    var answer = 0;
    let left = {};
    let right = {};
    let leftTopping = 0;
    let rightTopping = 0;
    for (let i of topping) {
        if (right[i]) right[i]++;
        else {
            right[i] = 1;
            rightTopping++;
        }
    }
    for (let i of topping) {
        right[i]--;
        if (right[i] === 0) {
            delete right[i];
            rightTopping--;
        }
        if (left[i]) left[i]++;
        else {
            left[i] = 1;
            leftTopping++;
        }
        if (leftTopping === rightTopping) answer++;
    }
    return answer;
}