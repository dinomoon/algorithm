def solution(t, k):
  result  = 0
  while k != 0:
    for i in range(len(t)):
      if t[i] != 0:
        t[i] -= 1
      else:
        t[i + 1] -= 1
      k -= 1
      result = i

  print(result)

solution([3, 1, 2], 5)