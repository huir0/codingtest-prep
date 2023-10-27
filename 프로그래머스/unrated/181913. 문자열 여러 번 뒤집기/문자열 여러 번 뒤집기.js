function solution(my_string, queries) {
    let arr = my_string.split('');
    for (let i = 0; i < queries.length; i++) {
        let [s,e] = queries[i];
        let temp = arr.slice(s,e+1).reverse();
        arr.splice(s,e-s+1, ...temp);
    }
    return arr.join('');
}