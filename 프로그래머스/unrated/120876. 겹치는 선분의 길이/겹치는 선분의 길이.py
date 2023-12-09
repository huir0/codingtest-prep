def solution(lines):
    starts = sorted(line[0] for line in lines)
    ends = sorted(line[1] for line in lines)

    overlap = 0
    length = 0
    end_index = 0
    
    for start in starts:
        while start > ends[end_index]:
            if overlap >= 2:
                length += ends[end_index] - prev_end
            overlap -= 1
            prev_end = ends[end_index]
            end_index += 1
        if overlap >= 2:
            length += min(ends[end_index], start) - prev_end
        overlap += 1
        prev_end = start

    while end_index < len(ends):
        if overlap >= 2:
            length += ends[end_index] - prev_end
        overlap -= 1
        prev_end = ends[end_index]
        end_index += 1

    return length