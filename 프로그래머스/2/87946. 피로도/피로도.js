function solution(k, dungeons) {
    dungeons.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]));
    let arr = Array.from({length:dungeons.length+1}, ()=> Array(k+1).fill(0));
    for (let i = 0; i < dungeons.length; i++) {
        for (let j = 1; j < k+1; j++) {
            if (dungeons[i][0] > j) arr[i+1][j] = arr[i][j];
            else arr[i+1][j] = Math.max(arr[i][j], 1 + arr[i][j-dungeons[i][1]])
        }
    }
    return arr[dungeons.length][k]
}