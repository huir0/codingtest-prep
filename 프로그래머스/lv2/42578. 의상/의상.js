function solution(clothes) {
    var answer = 1;
    let category = {};
    clothes.forEach((e) => {
        if (category[e[1]] === undefined) {
            category[e[1]] = 1;
        } else {
            category[e[1]]++;
        }
    })
    for (let key in category) {
        answer *= category[key] + 1;
    }
    return answer - 1;
}