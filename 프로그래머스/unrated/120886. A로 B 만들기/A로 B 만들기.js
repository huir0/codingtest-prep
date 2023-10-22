function solution(before, after) {
    const b = before.split('').sort();
    const a = after.split('').sort();
    for (let i = 0; i < b.length; i++) {
        if (a[i] !== b[i]) return 0;
    }
    return 1;
}