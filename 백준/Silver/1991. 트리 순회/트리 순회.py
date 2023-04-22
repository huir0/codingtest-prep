import sys

input = sys.stdin.readline

n = int(input())
tree = dict()

for _ in range(n):
    m, l, r = map(str, input().rstrip().split())
    tree[m] = l,r

def preorder_travasal(node):
    print(node, end="")
    if tree[node][0] != ".":
        preorder_travasal(tree[node][0])
    if tree[node][1] != ".":
        preorder_travasal(tree[node][1])
    
def inorder_travasal(node):
        
    if tree[node][0] != ".":
        inorder_travasal(tree[node][0])
    print(node, end="")
    if tree[node][1] != ".":
        inorder_travasal(tree[node][1])

def postorder_travasal(node):
    if tree[node][0] != ".":
        postorder_travasal(tree[node][0])
    
    if tree[node][1] != ".":
        postorder_travasal(tree[node][1])
   
    print(node, end="")

preorder_travasal('A')
print()
inorder_travasal('A')
print()
postorder_travasal('A')
print()