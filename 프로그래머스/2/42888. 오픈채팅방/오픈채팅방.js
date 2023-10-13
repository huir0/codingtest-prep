function solution(record) {
    var answer = [];
    let name = {};
    let actions = [];
    record.forEach(e=>{
        let [x,y,z] = e.split(' ');
        if (x === "Enter") {
            name[y] = z;
            actions.push([y,`들어왔습니다.`]);
        } else if (x === "Change") {
            name[y] = z;
        } else {
            actions.push([y,`나갔습니다.`]);
        }
    })
    answer = actions.map(([y,action]) => `${name[y]}님이 ${action}`);
    return answer;
}