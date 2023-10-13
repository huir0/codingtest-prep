function solution(land) {
    let dp = Array.from({length:land.length}, () => Array(land[0].length).fill(0));
    dp[0] = land[0];
    for (let i = 0; i < dp.length - 1; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            for (let k = 0; k < dp[0].length; k++) {
                if (j === k) continue;
                dp[i+1][k] = Math.max(dp[i+1][k], dp[i][j] + land[i+1][k]);
            }
        }
    }
    return Math.max(...dp[dp.length-1]);
}