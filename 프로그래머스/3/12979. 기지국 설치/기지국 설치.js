function solution(n, stations, w) {
    var answer = 0;
    let coverage = w * 2 + 1;
    let areaStart = 1;
    
    stations.forEach((station) => {
        let start = station - w;
        let end = station + w;
        
        if (areaStart < start) {
            let diff = start - areaStart;
            answer += Math.ceil(diff / coverage);
        }
        areaStart = end + 1;
    })
    
    if (areaStart <= n) {
        let diff = n - areaStart + 1;
        answer += Math.ceil(diff / coverage);
    }

    return answer;
}