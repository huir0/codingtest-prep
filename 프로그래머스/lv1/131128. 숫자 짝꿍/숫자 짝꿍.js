function solution(X, Y) {
    var answer = '';
    X = X.split('').sort(function compare(a,b) { return b-a}).join('');
    Y = Y.split('').sort(function compare(a,b) { return b-a}).join('');
    let i = 0;
    let j = 0;
    while (i<X.length && j<Y.length){
        if (X[i] < Y[j]) {
            j++;
        } else if (X[i] === Y[j]) {
            if (answer === "0" && X[i] === "0") {
            } else {
                answer += X[i];                
                }
                i++;
                j++;
            } else {
                i++;
            }
}
    if (answer.length === 0) {
        answer = "-1";
    }
    return answer;
}