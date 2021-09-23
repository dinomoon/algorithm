n = int(input())
answer = 0

def isPrime(n):
    for i in range(2, n):
        print(i)
        if (n % i == 0):
            return False
    return True

for i in range(2, n + 1):
    if (isPrime(i)):
        answer += 1

print(answer)