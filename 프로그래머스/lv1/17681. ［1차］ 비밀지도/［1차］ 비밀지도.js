function solution(n, arr1, arr2) {
    var answer = new Array(n).fill().map(()=>'');
    for (let i = 0; i < n; i++) {
        if (arr1[i].toString(2).length < n) {
            var j = '0'.repeat(n-arr1[i].toString(2).length);
            j += arr1[i].toString(2);
        } else {
            var j = arr1[i].toString(2);
        }
        if (arr2[i].toString(2).length < n) {
            var k = '0'.repeat(n-arr2[i].toString(2).length);
            k += arr2[i].toString(2);
        } else {
            var k = arr2[i].toString(2);
        }
        for (let l = 0; l < j.length; l++) {
            if (j[l] === '0' && k[l] === '0') {
                answer[i] += ' ';
            } else {
                answer[i] += '#';
            }
        }
    }
    return answer;
}