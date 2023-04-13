import sys
n = str(sys.stdin.readline().strip())
if len(n) < 2:
    x = "0"+n
    n = "0"+n
else:
    x = n
    
count = 0
def function(n):
    global x, count
    
    new_n = n
    
    
    temp = int(new_n[0]) + int(new_n[-1])
    
    temp = str(temp)
    new_n = new_n[-1] + temp[-1]
    
    
    count += 1 
    if new_n == x:
        return count
    function(new_n)

    
    

function(n)
print(count)