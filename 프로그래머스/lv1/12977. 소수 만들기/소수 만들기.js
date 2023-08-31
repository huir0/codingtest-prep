function solution(nums) {
    var answer = 0;
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i + 1; j < nums.length-1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let num = nums[i]+nums[j]+nums[k];
                flag = true;
                for (let l = 2; l < Math.sqrt(num) + 1; l++) {
                    if (num % l === 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag === true) {
                    answer++;
                }
            }
        }
    }
     
    return answer;
}