## H-Index

### 정렬 - Level2

<br>

![image](https://user-images.githubusercontent.com/42693257/122555792-b1f05200-d075-11eb-82f8-c0f1f4e65cae.png)

<br>

```js
function solution(citations) {
  citations.sort((a, b) => b - a);

  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }

  return i;
}
```
