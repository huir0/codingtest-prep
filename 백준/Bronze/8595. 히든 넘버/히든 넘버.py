import sys

input = sys.stdin.readline

n = int(input())
word = str(input())
s_point = 0
e_point = 0
hidden_sum = 0
i = 0
while i < len(word) -2:
    if ord(word[i]) < 58:
        if ord(word[i+1]) < 58:
            s_point = i
            i += 1
            while i < n and ord(word[i]) < 58:
                i += 1
            e_point = i
            hidden_sum += int(word[s_point:e_point])
        else:
            hidden_sum += int(word[i])
            i += 1
    else:
        i += 1

print(hidden_sum)