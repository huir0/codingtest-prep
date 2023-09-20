function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    while (people.length > 0) {
        let left = limit - people.pop();
        if (people[0] <= left) people.shift();
        answer++;
    }
    return answer;
}