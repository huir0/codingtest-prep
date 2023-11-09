function solution(today, terms, privacies) {
    var answer = [];
    let term = {};
    terms.forEach(e => {
        term[e.split(' ')[0]] = parseInt(e.split(' ')[1]);
    })
    
    let t = new Date(today.replace(/\./g, '-'));
    
    for (let i = 0; i < privacies.length; i++) {
        let x = privacies[i].split(' ')[1];
        let c = new Date(privacies[i].split(' ')[0].split('.').join('-'));
        
        c.setMonth(c.getMonth()+term[x]);
        
        if (t >= c) answer.push(i+1);
    }
    return answer;
}