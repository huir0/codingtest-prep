function solution(weights) {
    const dict = {}
    for (let weight of weights) {
        if (dict[weight] === undefined) dict[weight] = 1; else dict[weight] += 1;
    }
    weights.sort((a, b) => (a - b));
    let answer = 0;
    for (let weight of weights) {
        if (dict[weight] > 1) answer += (dict[weight] - 1);
        if (dict[weight * (3 / 2)]) answer += dict[weight * (3 / 2)];
        if (dict[weight * 2]) answer += dict[weight * 2];
        if (dict[weight * (4 / 3)]) answer += dict[weight * (4 / 3)];
        dict[weight] -= 1;
    }
    return answer;
}