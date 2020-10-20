# Map和WeakMap

# 1. Map

map的键与值可以为任意类型，且在频繁增删键值对的情况下性能比对象更好

## 1.1 初始化

```javascript
const map1 = new Map()
const map2 = new Map([ ['key1', '1' ], [ 'key2', '2' ] ])
```

如果构造参数有参数的话，参数是数组或类数组或集合，数组或集合的元素是数组或类数组，元素的一个值为map的键，第二个值为map中与该键对应的值

## 1.2操作

### 添加

```javascript
map1.set(key, value)
```

### 获取

```javascript
map1.get(key)
```

### 删除

```javascript
map1.delete(key)
```

### 遍历

遍历顺序是按照键值对的添加顺序来进行遍历的

```javascript
map1.keys()
map1.values()
map1.entries()
for (let [key, value] of map1) {
    // for...of与数组解构赋值
    console.log(`${key}=${value}`)
}
map1.forEach((value, key) => {
    console.log(`${key}=${value}`)
})
```

### 大小

```javascript
map1.size
```

### 判断

```javascript
map1.has(key)
```

### 清空

```javascript
map1.clear()
```

# 2. WeakMap

但是对于对象的引用没在不算在垃圾收集的计数范围内

### 构造函数

与Map一样

### 添加

```javascript
map1.set(key, value)
```

### 获取

```javascript
map1.get(key)
```

### 判断

```javascript
map1.has(key)
```

### 删除

```javascript
map1.delete(key)
```