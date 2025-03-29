![图片描述](https://cdn.jsdelivr.net/gh/yihuier/yihuier.github.io@latest/images/knowledge/test.png)

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