function solution(players, callings) {
    var answer = [];
    let indexMap = new Map();
    for (let i = 0; i < players.length; i++) {
        indexMap.set(players[i], i);
    }
    for (let i = 0; i < callings.length; i++) {
        let count = indexMap.get(callings[i]);
        let temp = players[count-1];
        players[count-1] = callings[i];
        players[count] = temp;
        indexMap.set(callings[i], count-1);
        indexMap.set(temp, count);
    }
    answer = players;
    return answer;
}
