function solution(myString) {
    var toCorrect = 'abcdefghijk'
    for (let i of toCorrect) {
        myString = myString.replaceAll(i,'l');
    }
    return myString;    
}