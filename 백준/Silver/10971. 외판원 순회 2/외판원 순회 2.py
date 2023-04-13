import sys
input = sys.stdin.readline
INF = float('inf')

def solve():
    n = int(input()) # 도시의 개수
    w = [list(map(int, input().split())) for _ in range(n)] # 비용 행렬
    dp = [[None] * (1 << n) for _ in range(n)] # 메모이제이션을 위한 배열

    # 현재 위치와 방문한 도시들의 상태를 나타내는 last와 visited를 인자로 하는 함수
    def find_path(last, visited):
        if visited == (1 << n) - 1: # 모든 도시를 방문한 경우
            return w[last][0] or INF # 첫 번째 도시로 돌아가는 비용을 반환
        if dp[last][visited] is not None: # 이미 계산한 경우
            return dp[last][visited] # 저장된 값을 반환
        tmp = INF
        for city in range(n): # 다음에 방문할 도시를 선택
            if visited & (1 << city) == 0 and w[last][city] != 0: # 아직 방문하지 않은 도시이고 이동 가능한 경우
                tmp = min(tmp,
                          find_path(city, visited | (1 << city)) + w[last][city]) # 최소 비용을 갱신
        dp[last][visited] = tmp # 최소 비용을 저장
        return tmp

    print(find_path(0, 1 << 0)) # 첫 번째 도시에서 시작하여 최소 비용을 출력

solve()