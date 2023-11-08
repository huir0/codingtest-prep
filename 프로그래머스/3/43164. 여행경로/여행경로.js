function solution(tickets) {
    let answer = [];
    let trips = {};

    for (let i = 0; i < tickets.length; i++) {
        let start = tickets[i][0];
        let end = tickets[i][1];
        if(trips[start] === undefined) trips[start] = [end];
        else trips[start].push(end);
    }

    for (let trip in trips) {
        trips[trip].sort();
    }

    const dfs = (start) => {
        while(trips[start] !== undefined && trips[start].length > 0) {
            dfs(trips[start].shift());
        }
        answer.unshift(start);
    }

    dfs('ICN');

    return answer;
}