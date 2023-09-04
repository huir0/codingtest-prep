function solution(s){
    let pCount = 0;
    let yCount = 0;
    if (s.includes("p") || s.includes("y") || s.includes("P") || s.includes("Y")) {
        for (let i of s) {
        if (i.toLowerCase() === "p") {
            pCount++;
        } else if (i.toLowerCase() === "y") {
            yCount++;
        }
    }
    } else {
        return true;
    }
    if (pCount === yCount) {
        return true;
    } else {
        return false;
    }
}