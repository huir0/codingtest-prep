function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        if (dic[i].length === spell.length) {
            spell.forEach(e => {
                dic[i] = dic[i].replace(e,'');
            })
        }        
    }
    if (dic.includes('')) return 1;
    else return 2;
}