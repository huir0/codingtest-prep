import heapq

def solution(jobs):
    jobs.sort()
    count, last, answer = 0, -1, 0
    heap = []
    current_time = jobs[0][0]
    while count < len(jobs):
        for s, t in jobs:
            if last < s <= current_time:
                heapq.heappush(heap, (t, s))
        if len(heap) > 0:
            count += 1
            last = current_time
            term, start = heapq.heappop(heap)
            current_time += term
            answer += (current_time - start)
        else:
            current_time += 1
    return int(answer / len(jobs))
