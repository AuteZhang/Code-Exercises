# How Do Logic Operators Work?

## 1. AND Operator (`&&`)

The AND operator returns `true` only if **both operands** are true. If either operand is false, the result is false.

```js
console.log(true && true);  // Output: true
console.log(true && false); // Output: false
```

### Behavior in JavaScript
- `&&` **stops evaluating** as soon as it finds a `false` value (short-circuiting).
- If **all conditions are true**, it **returns** the **last truthy** value.
- **Otherise**, it returns the **first falsy** value.

```js
console.log(0 && 'Hello'); // Output: 0 (stops at 0)
console.log(1 && 'Hello'); // Output: "Hello" (both are truthy, returns last value)
```

## 2. OR Operator (`||`)

The OR operator returns `true` if **at least one operand** is true. It only returns false if both operands are false.

```js
console.log(true || false); // Output: true
console.log(false || false); // Output: false
```

### Behavior in JavaScript
- `||` **stops evaluating**  as soon as it finds a `true` value (short-circuiting).
- It **returns** the **first truthy** value.
- If **no truthy** value is found, it **returns** the** last falsy** value.

```js
console.log('' || 'Hello'); // Output: "Hello" (first truthy value)
console.log(false || 0 || null); // Output: null (all falsy, returns the last one)
```
## 3. NOT Operator (`!`)

The NOT operator **flips** the boolean value.
- `true` becomes `false`.
- `false` becomes `true`.

### Behavior in JavaScript
- You can use it check falsy values indirectly.

```js
console.log(!0);    // Output: true (because 0 is falsy)
console.log(!'Hi'); // Output: false (because 'Hi' is truthy)
```
## 4. Combining Logical Operators

You can **chain** logical operators **together to** create complex **conditions**.  **The order of** operations (**precedence**) matters:
1. `!` (NOT) is evaluated first.
2. `&&` (AND) is evaluated second.
3. `||` (OR) is evaluated last.

```js
console.log(true || false && false); // Output: true
// Explanation: false && false = false; true || false = true

console.log(!(false || true)); // Output: false
// Explanation: false || true = true; !true = false
```
## 5. Truthy and Falsy Values

Logical operators **work with** **all types **of values, **not just** `true` and `false`. In JavaScript:
- **Falsy values**: `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`.
- **Truthy values**: Non-zero numbers, non-empty strings, objects, etc.

```js
console.log(0 || 'Hello');  // Output: "Hello" (0 is falsy, 'Hello' is truthy)
console.log(1 && 'Hello');  // Output: "Hello" (both are truthy, returns last value)
console.log(!'');           // Output: true (empty string is falsy, so !'' is true)
```
## Related Code Address
1. [JavaScript Code Exercise 1](https://github.com/AuteZhang/Code-Exercises/tree/f20590eaa300ecbc9a4dcea056100dfdcbce6268/1.%20Frontend%20Code/1.%20JavaScript/JavaScript%20Code%20Exercise%201)
