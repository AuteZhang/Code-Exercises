# Use Of Regular Expressions In `replace()` Funtion

## 1. Basic use of `replace()`

```js
string.replace(pattern, replacement);
```
- `pattern`: can be a string or a **regular expression**.
- `replacement`: is a **string** or a **callback function** used to replace the **matched part**.

When pattern is a regular expression, `replace()` will **match** the string and replace the **matched part ** with `replacement`.

## 2. Use of regular expressions

Regular expressions **can be used to** implement **complex replacement logic**, **such as** **batch** replacement, **dynamic** replacement, and **the use of capture groups**.

### 2.1 Simple pattern matching replacement

```js
let str = "abc123def456";
let result = str.replace(/\d+/g, "X"); // 替换所有连续的数字为 "X"
console.log(result); // 输出: "abcXdefX"
```
1. `/\d+/`: Matches **one or more** consecutive digits.
2. `g`: Global flag that matches **all matching parts of a string**, rather than just the first one.

### 2.2 Multi-pattern replacement

The `|` (OR) symbol **in regular expressions** can be used to match **multiple patterns** and **replace** them **uniformly**.

```js
let str = "apple, orange, banana";
let result = str.replace(/apple|orange|banana/g, "fruit");
console.log(result); // 输出: "fruit, fruit, fruit"
```
### 2.3 Using capture groups

You can use **capture groups** in regular expressions to **extract** the matched part and use it for replacement.

```js
let str = "2023-11-14";
let result = str.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");
console.log(result); // 输出: "11/14/2023"
```

1.  `(\d{4})`: Captures 4 digits (**year**).
2.  `(\d{2})`: Captures 2 digits (**month**).
3. `(\d{2})`: Captures 2 digits (**date**).

`$1`, `$2`, `$3`: **Represents** the contents of the capture group in the regular expression, **corresponding to** group 1, group 2, and group 3, **respectively**.

### 2.4 Dynamic replacement (using callback function)

If you need to dynamically generate replacement values **based on** the matched content, you can **use** a callback function **as** the `replacement` parameter.

```js
let str = "The price is $100 and $200.";
let result = str.replace(/\$\d+/g, (match) => {
    let value = parseInt(match.slice(1)); // 提取数字部分
    return `$${value * 2}`; // 将价格翻倍
});
console.log(result); // 输出: "The price is $200 and $400."
```

- `match`: The callback function **receives** the matched part **as** a parameter.
- Dynamically generates a replacement value and returns the new value.

## Related Code Address
[JavaScript Code Exercise 1](https://github.com/AuteZhang/Code-Exercises/tree/b5a60a8b2539032ca3cb2ba5c5990a40f4905dcc/1.%20Frontend%20Code/1.%20JavaScript/JavaScript%20Code%20Exercise%201)
