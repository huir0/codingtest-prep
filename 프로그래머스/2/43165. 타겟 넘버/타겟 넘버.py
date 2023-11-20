from itertools import product

def solution(numbers, target):
    combinations = list(product([1, -1], repeat=len(numbers)))
    answer = sum(1 for combination in combinations if sum(n*c for n, c in zip(numbers, combination)) == target)
    return answer