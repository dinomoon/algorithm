## 정렬

### 개념

데이터를 특정한 기준에 따라서 순서대로 나열하는 것

### 선택 정렬

가장 원시적인 방법으로 매번 '가장 작은 것을 선택' / 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸고, 그다음 작은 데이터를 선택해 앞에서 두 번째 데이터와 바꿈.

```py
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(len(array)):
  min_index = i
  for j in range(i + 1, len(array)):
    if array[min_index] > array[j]:
      min_index = j
  array[i], array[min_index] = array[min_index], array[i]

print(array)
```

### 삽입 정렬

특정한 데이터를 적절한 위치에 '삽입'한다는 의미에서 삽입 정렬이라고 부름. 필요할 때만 위치를 바꾸므로 '데이터가 거의 정렬 되어 있을 때' 훨씬 효과적임.

```py
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(1, len(array)):
  for j in range(i, 0, -1): # 인덱스 i부터 1까지 감소하며 반복
    if array[j] < array[j - 1]: # 자기가 더 작으면 한 칸씩 왼쪽으로 이동
      array[j], array[j - 1] = arra[j - 1], array[j]
    else: # 자기보다 작은 데이터를 만나면 멈춤
      break

print(array)
```

### 퀵 정렬

정렬 알고리즘 중에서 가장 많이 사용되는 알고리즘. (병합 정렬도 퀵 정렬만큼 빠름). 퀵 정렬과 병합 정렬은 대부분의 프로그래밍 언어에서 정렬 라이브러리의 근간이 되는 알고리즘이기도 함. / 아이디어: '기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸면 어떨까?' 교환하기 위한 '기준'을 피벗이라고 하는데 피벗을 설정하는 방법에 따라 여러 가지 방식으로 퀵 정렬을 구분함. 가장 대표적인 방식은 호어 분할방식. (리스트의 첫 번째 데이터를 피벗으로 정함)

```py
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array, start, end):
  if start >= end: # 원소가 1개인 경우 종료
    return
  pivot = start # 피벗은 첫 번째 원소
  left = start + 1
  right = end
  while left <= right:
    # 피벗보다 큰 데이터를 찾을 때까지 반복
    while left <= end and array[left] <= array[pivot]:
      left += 1
    # 피벗보다 작은 데이터를 찾을 때까지 반복
    while right > start and array[right] >= array[pivot]:
      right += 1
    if left > right: # 엇갈렸다면 작은 데이터와 피벗을 교체
      array[right], array[pivot] = array[pivot], array[right]
    else: # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
      array[left], array[right] = array[right], array[left]
  # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quick_sort(array, start, right - 1)
  quick_sort(array, right + 1, end)

quick_sort(array, 0, len(array) - 1)
print(array)
```

```py
# 파이썬의 장점을 살린 퀵 정렬 소스코드
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array):
  if len(array) <= 1:
    return array

  pivot = array[0] # 피벗은 첫 번째 원소
  tail = array[1:] # 피벗을 제외한 리스트

  left_side = [x for x in tail if x <= pivot] # 분할된 왼쪽 부분
  right_side = [x for x in tail if x > pivot] # 분할된 오른쪽 부분

  # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬을 수행하고, 전체 리스트를 반환
  return quick_sort(left_side) + [pivot] + quick_sort(right_side)

print(quick_sort(array))
```

### 계수 정렬

특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠른 정렬 알고리즘. 일반적으로 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000을 넘지 않을 때 효과적으로 사용할 수 있음. 왜냐하면 계수 정렬을 이용할 때는 모든 범위를 담을 수 있는 크기의 리스트(배열)를 선언해야 하기 때문. 계수 정렬은 때에 따라서 심각한 비효율성을 초래할 수도 있음. 예를 들어 데이터가 0과 999,999 단 2개만 존재한다고 가정하면 이 때에도 리스트의 크기가 100만 개가 되도록 선언해야 하기 때문이다. 따라서 항상 사용할 수 있는 정렬 알고리즘은 아니며, 동일한 값을 가지는 데이터가 여러 개 등장할 때 적합하다.

```py
# 모든 원소의 갓이 0보다 크거나 같다고 가정
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

# 모든 범위를 포함하는 리스트 선언(모든 값은 0으로 초기화)
count = [0] * (max(array) + 1)

for i in range(len(array)):
  count[array[i]] += 1 # 각 데이터에 해당하는 인덱스의 값 증가

for i in range(len(count)): # 리스트에 기록된 정렬 정보 확인
  for j in range(count[i]):
    print(i, end=' ')
```

### 유형

1. 정렬 라이브러리로 풀 수 있는 문제
2. 정렬 알고리즘의 원리에 대해서 물어보는 문제
3. 더 빠른 정렬이 필요한 문제
