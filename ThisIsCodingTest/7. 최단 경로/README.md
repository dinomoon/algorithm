## 최단 경로

### 개요

최단 경로(Shortest Path) 알고리즘은 말 그대로 가장 짧은 경로를 찾는 알고리즘. '길 찾기' 문제라고도 불림. 최단 경로 문제는 보통 그래프를 이용해 표현하는데 각 지점은 그래프에서 '노드'로 표현되고, 지점간 연결된 도로는 그래프에서 '간선'으로 표현됨. 실제 코딩 테스트에서는 최단 경로를 모두 출력하는 문제보다는 단순히 최단 거리를 출력하도록 요구하는 문제가 많이 출제됨. 대표적인 최단 거리 알고리즘은 다익스트라, 플로이드 워셜, 벨만 포드 이렇게 3가지. 이 책에서는 다익스트라와 플로이드 워셜만 다룸. 이 유형만 파악해도 충분함.

### 다익스트라 최단 경로 알고리즘

다익스트라(Dijkstra) 최단 경로 알고리즘은 그래프에서 여러 개의 노드가 있을 때, 특정한 노드에서 출발하여 다른 노드로 가는 각각의 최단 경로를 구해주는 알고리즘. 매번 '가장 비용이 적은 노드'를 선택해서 임의의 과정을 반복하기 때문에 그리디 알고리즘으로 분류됨.

1. 출발 노드를 설정한다.
2. 최단 거리 테이블을 초기화한다.
3. 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택한다.
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신한다.
5. 위 과정에서 3과 4를 반복한다.

### 간단한 다익스트라 알고리즘(방법1)

간단한 다익스트라 알고리즘은 O(V^2)의 시간 복잡도를 가지며, 다익스트라에 의해서 처음 고안되었던 알고리즘. 여기서 V는 노드의 개수.

```py
import sys
input = sys.stdin.readline
INF = int(1e9) # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수, 간선의 개수 입력받기
n, m = map(int, input().split())

# 시작 노드 번호 입력받기
start = int(input())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 만들기
graph = [[] for i in range(n + 1)]

# 방문한 적이 있는지 체크하는 목적의 리스트 만들기
visited = [False] * (n + 1)

# 최단 거리 테이블을 모두 무한으로 초기화
distance = [INF] * (n + 1)

# 모든 간선 정보 입력받기
for _ i in range(m):
  a, b, c = map(int, input().split())
  # a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].append((b, c))

# 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
def get_smallest_node():
  min_value = INF
  index = 0 # 가장 최단 거리가 짧은 노드(인덱스)
  for i in range(1, n + 1):
    if distance[i] < min_value and not visited[i]:
      min_value = distance[i]
      index = i
  return index

def dijstra(start):
  # 시작 노드에 대해서 초기화
  distance[start] = 0
  visited[start] = True
  for j in graph[start]:
    distance[j[0]] = j[1]
  # 시작 노드를 제외한 전체 n - 1개의 노드에 대해 반복
  for i in range(n - 1):
    # 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
    now = get_smallest_node()
    visited[now] = True
    # 현재 노드와 연결된 다른 노드를 확인
    for j in graph[now]:
      cost = distance[now] + j[1]
      # 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if cost < distance[j[0]]:
        distance[j[0]] = cost

# 다익스트라 알고리즘 수행
dijstra(start)

# 모든 노드로 가기 위한 최단 거리를 출력
for i in range(1, n + 1):
  # 도달할 수 없는 경우, 무한(INFINITY)이라고 출력
  if distance[i] == INF:
    print("INFINITY")
  # 도달할 수 있는 경우 거리를 출력
  else:
    print(distance[i])
```
