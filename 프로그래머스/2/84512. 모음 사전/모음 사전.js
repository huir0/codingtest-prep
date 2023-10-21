function solution(word) {
    const aeiou = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    for(let i=0; i < word.length; i++) {
        let index = aeiou.indexOf(word[i]);
        answer += 1 + index * (5 ** (5-i) - 1) / 4;
    }
    
    
    return answer;
}