n = int(input())
a = []
prime = [2, 3]

for num in range(5, 10001, 2):
    i = 1
    while prime[i] * prime[i] <= num:
        if num % prime[i] == 0:
            break
        i += 1
    else:
        prime.append(num)

for l in range(n):
    a.append(int(input()))
    left = 0
    right = len(prime) - 1
    min_diff = float('inf')
    result = None

    while left <= right:
        current_sum = prime[left] + prime[right]
        if current_sum == a[l]:
            diff = abs(prime[left] - prime[right])
            if diff < min_diff:
                min_diff = diff
                result = (prime[left], prime[right])
            left += 1
            right -= 1
        elif current_sum < a[l]:
            left += 1
        else:
            right -= 1

    if result is not None:
        print(f'{result[0]} {result[1]}')