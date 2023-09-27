function solution(my_string) {
    const vowel = ['a','e','i','o','u'];
    for (let i of vowel) {
        my_string = my_string.replaceAll(i,'');
    }
    return my_string;
}