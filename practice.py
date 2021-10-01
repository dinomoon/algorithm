import heapq

q = []
heapq.heappush(q, (1, 2))
heapq.heappush(q, (0, 2))
heapq.heappush(q, (3, 2))

print(heapq.heappop(q)[0])
print(q)