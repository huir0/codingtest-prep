function solution(array, n) {
    var answer = 0;
    array.sort((a,b) => a - b);
    let greater = array.find(e => e > n);
    if (greater !== undefined) {
        answer = n - array[array.indexOf(greater) - 1] <= greater - n ? array[array.indexOf(greater) - 1] : greater;
    } else {
        answer = array.at(-1);
    }
    return answer;
}