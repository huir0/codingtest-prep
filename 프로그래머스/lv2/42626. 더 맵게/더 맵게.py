import heapq

def solution(scoville, K):
    answer = 0
    queue = [];
    for i in scoville:
        heapq.heappush(queue, i)
    while queue[0] < K:
        if len(queue) == 1:
            return -1
        a = heapq.heappop(queue)
        b = heapq.heappop(queue)
        heapq.heappush(queue, (a + b*2))
        answer += 1
    return answer