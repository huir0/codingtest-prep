function solution(name, yearning, photo) {
    var answer = [];
for (let i = 0; i < photo.length; i++) {
    let temp = 0;
    for (let j of photo[i]) {
        for (let k = 0; k < name.length; k++) {
            if (j === name[k]) {
                temp += yearning[k];
            }
        }
    }
    answer.push(temp);
}
    return answer;
}