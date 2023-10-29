function solution(files) {
    return files.sort((a, b) => {
        const regex = /(^[a-z-. ]+)([0-9]{1,5})(.*$)/i;
        const aMatch = a.match(regex);
        const bMatch = b.match(regex);

        const aHead = aMatch[1].toLowerCase();
        const bHead = bMatch[1].toLowerCase();

        const aNumber = parseInt(aMatch[2]);
        const bNumber = parseInt(bMatch[2]);

        return aHead.localeCompare(bHead) || aNumber - bNumber;
    });
}