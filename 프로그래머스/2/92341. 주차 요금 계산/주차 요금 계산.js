function solution(fees, records) {
    let answer = [];
    let history = {};
    let fee = {};
    
    records.forEach(e => {
        let [time, number, io] = e.split(' ');
        if (!history[number]) {
            history[number] = {time, io}
            return;
        };
        if (io === 'OUT') {
            let inTime = history[number].time.split(':').map(Number);
            let outTime = time.split(':').map(Number);
            let duration = (outTime[0] - inTime[0]) * 60 + (outTime[1] - inTime[1]);
            if (fee[number]) fee[number] += duration;
            else fee[number] = duration;
            
            delete history[number];
        } 
    })
    Object.keys(history).forEach(number => {
        let inTime = history[number].time.split(':').map(Number);
        let outTime = [23,59];
        let duration = (outTime[0] - inTime[0]) * 60 + (outTime[1] - inTime[1]);
        if (fee[number]) fee[number] += duration;
        else fee[number] = duration;
    })
    Object.keys(fee).sort().forEach(number => {
        let cost = fees[1];
        if (fee[number] > fees[0]) cost += Math.ceil((fee[number] - fees[0]) / fees[2]) * fees[3];
        answer.push(cost);
    })
    return answer;
}