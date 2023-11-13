from collections import Counter

def solution(a, b, c, d):
    counter = Counter([a, b, c, d])
    num, count = counter.most_common(1)[0]

    if count == 4:
        return 1111 * num
    elif count == 3:
        other_num = (set([a, b, c, d]) - set([num])).pop()
        return (10 * num + other_num) ** 2
    elif count == 2:
        nums = list(set([a, b, c, d]))
        print(nums)
        if len(nums) == 2:
            return (nums[0] + nums[1]) * abs(nums[0] - nums[1])
        else:
            if nums[2] == num:
                return nums[0] * nums[1]
            elif nums[0] == num:
                return nums[1] * nums[2]
            else:
                return nums[0] * nums[2]
    elif count == 1:
        return min([a, b, c, d])
