## k번째수

### 정렬 - Level1

<br>

![image](https://user-images.githubusercontent.com/42693257/122555094-cc75fb80-d074-11eb-8906-6a4dae15f86f.png)

<br>

```js
function solution(array, commands) {
  return commands.map((command) => {
    const [sPos, ePos, goalPos] = command;
    const newArray = array.slice(sPos - 1, ePos).sort((a, b) => a - b);

    return newArray[goalPos - 1];
  });
}
```
