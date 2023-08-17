function solution(nums) {
    var answer = 0;
    let count = nums.length;
    let nums_set = new Set(nums);
    if ((count / 2) < nums_set.size) {
        answer = count / 2;
    } else {
        answer = nums_set.size;
    }
    return answer;
}