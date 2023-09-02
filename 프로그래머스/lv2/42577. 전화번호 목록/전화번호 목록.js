function solution(phone_book) {
    var answer = true;
    phone_book.sort();
    for (let i = 0; i < phone_book.length - 1; i++) {
            if (phone_book[i+1][0] !== phone_book[i][0]) {
                continue;
            } else {
                if (phone_book[i+1].startsWith(phone_book[i])) {
            return answer = false;
            }   
        }
    }
    return answer;
}