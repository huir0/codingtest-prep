function solution(food) {
    var answer = '';
    let food_arr = new Array();
    for (let i = 1; i < food.length; i++) {
        let foood = i.toString().repeat(Math.trunc(food[i]/2))
        answer += foood;
        food_arr.unshift(foood);
    }
    answer += '0';
    food_arr.forEach((e)=>{
        answer += e
    })
    return answer;
}