function solution(str1, str2) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    let regex = /^[A-Z]+$/;
    for (let i = 0; i < str1.length -1; i++) {
        let str = (str1[i] + str1[i+1]).toUpperCase();
        if (regex.test(str)) arr1.push(str);
    }
    for (let i = 0; i < str2.length -1; i++) {
        let str = (str2[i] + str2[i+1]).toUpperCase();
        if (regex.test(str)) arr2.push(str);
    }
    if (arr1.length === 0 && arr2.length === 0) return 65536;
    let inter = 0;
    let shorter = arr1.length >= arr2.length ? arr2 : arr1;
    let longer = arr1.length >= arr2.length ? arr1 : arr2;
    for (let i = 0; i < shorter.length; i++) {
        if (longer.indexOf(shorter[i]) !== -1) {
            longer[longer.indexOf(shorter[i])] = 0;
            inter++;
        }
    }
    let sum = arr1.length + arr2.length - inter;
    answer = Math.trunc((inter / sum) * 65536);
    return answer;
}