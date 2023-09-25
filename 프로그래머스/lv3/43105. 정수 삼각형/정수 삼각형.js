function solution(triangle) {
    let arr = JSON.parse(JSON.stringify(triangle));
    for (let i = 0; i < triangle.length - 1; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            for (let k = j; k <= j + 1; k++) {
                arr[i+1][k] = arr[i+1][k] > arr[i][j] + triangle[i+1][k] ? arr[i+1][k] : arr[i][j] + triangle[i+1][k];
            }
        }
    }
    return Math.max(...arr[arr.length - 1]);
}