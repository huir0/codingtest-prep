function solution(book_time) {
    const bookings = book_time.map(([start, end]) => {
        let [shour, sminute] = start.split(":");
        let [ehour, eminute] = end.split(":");
        return [parseInt(shour) * 60 + parseInt(sminute), parseInt(ehour) * 60 + parseInt(eminute)]}).sort((a, b) => a[0] - b[0]);

    let rooms = [];
    for (let [start, end] of bookings) {
        let assigned = false;
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start - 10) {
                rooms[i] = end;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            rooms.push(end);
        }
    }

    return rooms.length;
}