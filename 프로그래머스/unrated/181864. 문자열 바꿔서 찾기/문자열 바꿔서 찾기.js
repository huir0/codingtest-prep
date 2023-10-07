function solution(myString, pat) {
    if (myString.replaceAll('A','C').replaceAll('B','A').replaceAll('C','B').includes(pat)) return 1;
    else return 0;
}