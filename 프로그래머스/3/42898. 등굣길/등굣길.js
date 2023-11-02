function solution(m, n, puddles) {
    let num = 1000000007;
    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
    dp[1][1] = 1;
    
    for (let i = 0; i < puddles.length; i++) {
        dp[puddles[i][0]][puddles[i][1]] = -1;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            if (i !== 1) dp[i][j] += dp[i-1][j] % num;
            if (j !== 1) dp[i][j] += dp[i][j-1] % num;
        }
    }
    
    return dp[m][n] % num;
}