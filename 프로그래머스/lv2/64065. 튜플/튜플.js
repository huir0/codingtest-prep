function solution(s) {
    s = s.replace("{{", "").replace("}}","").split("},{");
    var answer = new Array(s.length);
    let arr = [];
    for (let i of s) {
        i = i.split(",");
        arr.push(i);
    }
    arr.sort((a,b) => b.length - a.length);
    let length = arr.length;
    for (let j = 0; j < length; j++) {
        let n = arr.pop();
        for (let k of arr) {
            k.splice(k.indexOf(n[0]),1);
        }
        answer[j] = parseInt(n);
    }
    return answer;
}