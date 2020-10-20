# Symbol

## 1.概述

`Symbol(arg)`或者`Symbol()`可以创建`Symbol`对象，但是通过这样创建，只能使用String，Boolean等方法进行强制转换为其他类型，无法使用隐性的类型转换

## 2.Symbol.prototype.description

```javascript
const s1 = Symbol('one')
console.log(s1.description) // one
```

## 3.作为属性名

可以将Symbol对象作为属性名，

## 4.属性名的遍历

无法使用`Object.keys`和`Object.values`和`Object.entries`和`Object.getOwnPropertyNames`以及`for...in`遍历属性名类型为`Symbol`的属性和其相应的值，只能使用`Object.getOwnPropertySymbol`返回某个对象的所有`Symbol`属性

## 5.Symbol.for与Symbol.keyFor

通过`Symbol.for`创建的`Symbol`对象均为相同的变量，因为使用`Symbol.for`创建的`Symbol`对象

## 6.内置的Symbol

### 6.1.Symbol.hasInstance

用于修改作用于指定对象时`instanceof`运算符的结果

### 6.2.Symbol.isConcatSpreadable

在数组中使用这个符号表示是否可以再被合并的时候展开内容到目标数组中

### 6.3.Symbol.species

用来

### 6.4.Symbol.match

```javascript
'abc',match(/\w+/);
/\w+/[Symbol.match]('abc');
class MyMatcher {
    [Symbol.match](string) {
        return 'hello world'.indexOf(string)
    }
}
'e'.match(new MyMatcher()) // 1
```



### 6.5.Symbol.replace

### 6.6.Symbol.search

### 6.7.Symbol.split

### 6.8.Symbol.iterator

设置一个对象的遍历属性，当对象有改属性时，可以使用`for...of`和`for...in`和`Object.keys`和`Object.values`和`Object.entries`来进行遍历，以及与对象扩展符

```javascript
const obj = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
console.log(...obj)
```



### 6.9.Symbol.toPrimitive

对象的Symbol.toPrimitive方法会返回一个原生值，参数分别会有以下几个：

* `string`：可以转为字符串
* `number`：可以转为数字
* `default`：可以转为字符串也可以转为数字

```javascript
let obj = {
    [Symbol.toPrimitive](arg) {
        switch(arg) {
            case 'string': return 'abc';
            case 'number': return 123;
            case 'default': return 'default';
            default: throw new Error();
        }
    }
}
console.log(2 * obj)
console.log(3 + obj)
console.log(obj == 'default')
console.log(String(obj))
```

> **这边有问题，`obj == 'default'`这个表达式不能用`===`，全等会返回`false`，不全等返回`true`**

### 6.10.Symbol.toStringTag

### 6.11.Symbol.unscopables

对象的该方法发挥在使用`with`运算符包裹该对象后不会变为`with`范围内局部变量的属性名