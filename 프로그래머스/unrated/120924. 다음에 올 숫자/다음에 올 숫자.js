function solution(common) {
    if (common[0] + (common.at(-1) - common[0]) / (common.length - 1) === common[1]) return (common.at(-1) - common[0]) / (common.length - 1) + common.at(-1);
    else return common[1] / common[0] * common.at(-1);
}