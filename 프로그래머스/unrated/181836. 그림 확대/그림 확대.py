def solution(picture, k):
    result = []
    for row in picture:
        expanded_row = ''.join([char * k for char in row])
        result.extend([expanded_row] * k)
    return result