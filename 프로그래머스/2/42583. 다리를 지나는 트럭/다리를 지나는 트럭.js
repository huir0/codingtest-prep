function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let onBridge = [];
    let onWeight = 0;

    while (truck_weights.length > 0 || onBridge.length > 0) {
        time++;
        if (onBridge.length > 0 && (time - onBridge[0][1]) === bridge_length) {
            onWeight -= onBridge[0][0];
            onBridge.shift();
        }
        if (truck_weights.length > 0 && (onWeight + truck_weights[0]) <= weight) {
            onWeight += truck_weights[0];
            onBridge.push([truck_weights.shift(), time]);
        }
    }

    return time;
}
