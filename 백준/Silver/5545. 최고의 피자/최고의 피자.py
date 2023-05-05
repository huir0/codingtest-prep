import sys
input = sys.stdin.readline

n = int(input())

dough_price, topping_price = map(int, input().split())
dough_calories = int(input())

topping_calories = []
selected_topping = []

for _ in range(n):
    topping_calories.append(int(input()))

topping_calories.sort(reverse=True)

best_pizza = int(dough_calories / dough_price)
total_calories = dough_calories
total_price = dough_price + topping_price
for i in topping_calories:
    total_calories += i
    if int(total_calories / total_price) >= best_pizza:
        best_pizza = int(total_calories / total_price)
    else:
        total_calories -= i
        break
    total_price += topping_price    

print(best_pizza)