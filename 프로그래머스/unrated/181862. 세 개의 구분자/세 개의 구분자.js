function solution(myStr) {
    var answer = [];
    myStr = myStr.replaceAll('a',' ');
    myStr = myStr.replaceAll('b',' ');
    myStr = myStr.replaceAll('c',' ');
    
    myStr.split(' ').forEach(e => {
        if (e !== '') answer.push(e);
    })
    if (answer.length === 0) return ["EMPTY"];
    return answer;
}