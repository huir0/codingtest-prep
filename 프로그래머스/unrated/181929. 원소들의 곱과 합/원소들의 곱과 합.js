function solution(num_list) {
    if (num_list.reduce((a,b)=>a*b,1) > Math.pow(num_list.reduce((a,b)=>a+b),2)) return 0;
    else return 1;
}