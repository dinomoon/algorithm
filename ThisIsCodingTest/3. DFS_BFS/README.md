## DFS/BFS

### 개념

- 대표적인 그래프 탐색 알고리즘
- 탐색(Search)이란 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정
- DFS/BFS는 코딩 테스트에서 매우 자주 등장하는 유형이므로 반드시 숙지

<b>DFS(Depth-First Search)</b>

- 깊이 우선 탐색이라고도 부르며, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘
- DFS는 스택 자료구조(혹은 재귀 함수)를 이용. 구체적인 동작 과정 다음과 같음.
  1. 탐색 시작 노드를 스택에 삽입하고 방문 처리
  2. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냄.
  3. 더 이상 2번 과정을 수행할 수 없을 때까지 반복.

### 예제

```py
def dfs(graph, v, visited):
  # 현재 노드를 방문 처리
  visited[v] = True
  print(v, end=' ')
  # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for i in graph[v]:
    if not visited[i]:
      dfs(graph, i, visited)

  graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
  ]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

# 정의된 DFS 함수 호출
dfs(graph, 1, visited)
```

<b>BFS(Breadth-First Search</b>

- 너비 우선 탐색이라고도 부르며, 그래프에서 가까운 노드부터 우선적으로 탐색하는 알고리즘
- 큐 자료구조를 이용하며, 구체적인 동작 과정은 다음과 같음.
  1. 탐색 시작 노드를 큐에 삽입하고 방문 처리
  2. 큐에서 노드를 꺼낸 뒤에 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리.
  3. 더 이상 2번 과정을 수행할 수 없을 때까지 반복.

<br>

### 예제

```py
from collections import deque

def bfs(graph, start, visited):
  # 큐(Queue) 구현을 위해 deque 라이브러리 사용
  queue = deque([start])
  # 현재 노드를 방문 처리
  visited[start] = True
  # 큐가 빌 때까지 반복
  while queue:
    # 큐에서 하나의 원소를 뽑아 출력
    v = queue.popleft()
    print(v, end=' ')
    # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True

  graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
  ]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

# 정의된 DFS 함수 호출
bfs(graph, 1, visited)
```

### 알아야 할 개념

스택 자료구조

- 먼저 들어온 데이터가 나중에 나가는 (선입후출) 형식의 자료구조
- 입구와 출구가 동일

큐 자료구조

- 먼저 들어 온 데이터가 먼저 나가는 (선입선출) 형식의 자료구조
- 입구와 출구가 모두 뚫려 있는 터널

재귀 함수

- 자기 자신을 다시 호출하는 함수
- 반드시 종료 조건을 명시해야 한다. (명시하지 않으면 함수가 무한히 호출)
- 예) 팩토리얼 구하기, 최대 공약수 구하기

```py
def factorial(n):
  if (n <= 1):
    return 1
  return n * factorial(n - 1)
```

최대 공약수 계산 (유클리드 호제법)

- A와 B의 최대 공약수는 A와 A를 B로 나눈 나머지의 최대 공약수와 같다. (A > B)

```py
def gcd(a, b):
  if (a % b === 0):
    return b
  return gcd(a, a % b)
```
