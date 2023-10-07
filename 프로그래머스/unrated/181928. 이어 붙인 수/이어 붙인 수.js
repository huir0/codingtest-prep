function solution(num_list) {
    let even = '';
    let odd = '';
    num_list.forEach((e)=> {
        if (e % 2 === 0) even += e;
        else odd += e;
    })
    return parseInt(even) + parseInt(odd);
}