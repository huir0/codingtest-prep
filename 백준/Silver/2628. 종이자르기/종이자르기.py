width, height = map(int, input().split())
num_cuts = int(input())
cuts = []
for _ in range(num_cuts):
    cuts.append(list(map(int, input().split())))


def max_area(width, height, cuts):
    hor_cuts = [0, height]
    ver_cuts = [0, width]
    for cut in cuts:
        if cut[0] == 0:
            hor_cuts.append(cut[1])
        else:
            ver_cuts.append(cut[1])
    hor_cuts.sort()
    ver_cuts.sort()
    max_height = max([hor_cuts[i+1] - hor_cuts[i] for i in range(len(hor_cuts)-1)])
    max_width = max([ver_cuts[i+1] - ver_cuts[i] for i in range(len(ver_cuts)-1)])
    return max_height * max_width

print(max_area(width, height, cuts))