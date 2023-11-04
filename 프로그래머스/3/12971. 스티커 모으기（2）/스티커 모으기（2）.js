function solution(sticker) {
    let dp1 = Array(sticker.length).fill(0);
    let dp2 = Array(sticker.length).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    
    dp2[0] = 0;
    dp2[1] = sticker[1];
    
    if (sticker.length === 1) return sticker[0];
    
    for (let i = 2; i < sticker.length - 1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i]);
    }
    
    for (let i = 2; i < sticker.length; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i]);
    }
    
    return Math.max(Math.max(...dp1), Math.max(...dp2));
}