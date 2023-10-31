function solution(rank, attendance) {
    let students = rank.map((r,i) => ({idx:i, rank:r, attnd: attendance[i]}));
    students.sort((a,b) => a.rank - b.rank);
    let selected = [];
    for (let i of students) {
        if (i.attnd) {
            selected.push(i.idx);
            if (selected.length === 3) break;
        }
    }
    
    return selected[0] * 10000 + selected[1] * 100 + selected[2];
}