JavaScript 中的 var、let 和 const 有以下主要区别：

## 1. 作用域

- **var**: 函数作用域
- **let** 和 **const**: 块级作用域

```javascript
function scopeExample() {
  if (true) {
    var varVariable = "var 变量";
    let letVariable = "let 变量";
    const constVariable = "const 变量";
  }
  
  console.log(varVariable); // "var 变量"
  console.log(letVariable); // ReferenceError: letVariable is not defined
  console.log(constVariable); // ReferenceError: constVariable is not defined
}
```

## 2. 变量提升
快速排序是一种分治算法，它的基本思想是：

1. 选择一个"基准"元素
2. 将数组分区，使得所有小于基准的元素都在基准的左边，所有大于基准的元素都在基准的右边
3. 递归地对左右两个子数组进行快速排序

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

时间复杂度：
- 平均情况：O(n log n)
- 最坏情况：O(n²)（当数组已经排序时）
- 最好情况：O(n log n) 


1. 选择一个"基准"元素
2. 将数组分区，使得所有小于基准的元素都在基准的左边，所有大于基准的元素都在基准的右边
3. 递归地对左右两个子数组进行快速排序

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

时间复杂度：
- 平均情况：O(n log n)
- 最坏情况：O(n²)（当数组已经排序时）
- 最好情况：O(n log n) 


1. 选择一个"基准"元素
2. 将数组分区，使得所有小于基准的元素都在基准的左边，所有大于基准的元素都在基准的右边
3. 递归地对左右两个子数组进行快速排序

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

时间复杂度：
- 平均情况：O(n log n)
- 最坏情况：O(n²)（当数组已经排序时）
- 最好情况：O(n log n) 
- **var**: 提升到函数顶部，初始值为 undefined
- **let** 和 **const**: 也会提升，但存在"暂时性死区"，在声明前不能访问

```javascript
function hoistingExample() {
  console.log(varVariable); // undefined
  console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
  
  var varVariable = "var 变量";
  let letVariable = "let 变量";
}
```

## 3. 重复声明

- **var**: 允许在同一作用域内重复声明
- **let** 和 **const**: 不允许在同一块级作用域内重复声明

```javascript
var x = 1;
var x = 2; // 允许

let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared
```

## 4. 常量声明

- **const**: 必须在声明时初始化，且不能重新赋值
- 但对于对象和数组，可以修改其属性或元素

```javascript
const PI = 3.14159;
PI = 3; // TypeError: Assignment to constant variable

const obj = { name: "John" };
obj.name = "Jane"; // 允许修改属性
obj = {}; // TypeError: Assignment to constant variable
```

## 最佳实践

- 默认使用 **const**
- 当需要重新赋值时使用 **let**
- 避免使用 **var** 