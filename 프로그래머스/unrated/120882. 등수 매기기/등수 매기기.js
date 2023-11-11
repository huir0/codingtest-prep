function solution(score) {
    let avgScore = score.map(e => (e[0]+e[1]) / 2);
    let rank = avgScore.map((a,b) => avgScore.filter((x,y) => x > a && y !== b).length + 1);
    return rank;
}