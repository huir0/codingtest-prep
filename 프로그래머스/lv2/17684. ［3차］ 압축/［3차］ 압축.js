function solution(msg) {
    var answer = [];
    let dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let i = 0;
    let letters = msg[0];
    while (i < msg.length) {
        let index = dict.indexOf(letters+msg[i+1]);
        if (index === -1) {
            dict.push(letters+msg[i+1]);
            answer.push(dict.indexOf(letters)+1);
            letters = msg[i+1];
        } else {
            letters += msg[i+1];
        }
        i++;
    }
    
    return answer;
}