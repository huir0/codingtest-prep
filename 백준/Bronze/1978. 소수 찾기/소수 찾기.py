n = int(input())
a = list(map(str, input().split()))


prime = [] 
count = 0
prime.append(2)
prime.append(3)

for num in range(5, 1001, 2):
    i = 1
    while prime[i] * prime[i] <= num:
        if num % prime[i] == 0:
            break
        i += 1
    else:
        prime.append(num)

for k in range(0, n):
    for j in range(len(prime)):
        if int(a[k]) == prime[j]:
            count += 1
            break
          
print(count)