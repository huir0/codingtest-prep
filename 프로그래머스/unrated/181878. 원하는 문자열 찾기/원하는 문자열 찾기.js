function solution(myString, pat) {
    if (myString.toUpperCase().includes(pat.toUpperCase())) return 1;
    else return 0;
}