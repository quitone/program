# Object

## 1. 键与值

键：对象的键可为字符串类型或Symbol类型，非字符串非Symbol会在获取或设置对象属性时将其转为字符串类型
值：对象的值可以为任意类型

## 2.对象的创建

* 字面量：通过字面量创建

```javascript
let obj = { one: 1 }
```

* Object.create：通过该静态方法可以创建

```javascript
let obj = Object.create({}, { one: { value: 1, writable: true, enumerable: true, configurable: true } })
```

* 扩展运算符

```javascript
let obj = { ...obj1 }
```

* Object.fromEntries

```javascript
const obj1 = Object.fromEntries(new Map([ ['foo', 'bar'], ['baz', 42] ]))
const obj2 = Object.fromEntries([ ['foo', 'bar'], ['baz', 42] ])
```

## 3.遍历

* for…in

```javascript
for (let v in {one: 1}) { console.log(v) }
```

* `Object.entries`

遍历所有可遍历的类型为字符串的键与值

* `Object.values`

返回所有可遍历的类型为字符串的键的值

* `Object.keys`

返回所有可遍历的类型为字符串的键

* `Object.getOwnProopertyNames`

返回所有类型为字符串的键的描述符，不管有没有把这个值设为可遍历

* `Object.getOwnPropertyDescriptors`

返回所有键的描述符

* `Object.getOwnPropertySymbols`

返回所有类型为Symbol的键

## 4. 设置值

使用属性访问符号.或[]

## 5. 复制

* 深复制

  * 可以使用`JSON.stringify`和`JSON.parse`进行其内容的深度复制，但是`JSON.stringify`无法对有循环引用的对象使用，且只对描述符中遍历属性为真的字符串键名有用
  * 可以使用`Object.getOwnPropertyDescriptors`或`Object.getOwnPropertyNames`或者`Object.getOwnPropertySymbols`获取当前对象的键名列表，并递归获取对象的原型进行复制

* 浅复制

  * Object.assign

    Object.assign可以复制复制所有可遍历的属性（包括键类型为Symbol的属性），不可复制继承自原型的属性

## 6. 原型

* 在浏览器实现中可以使用`__proto__`属性获取实例的原型，获取构造器的原型在所有平台均可用`prototype`这个属性来获取
* 设置原型：`Object.setPrototypeOf`

```javascript
Object.setPrototypeOf()
```

* 获取原型：`Object.getPrototypeOf`
* 查看一个对象是否在另一个对象的原型链上`Object.isPrototypeOf`，而`instanceof`关键字检测一个对象是否为某一个构造函数使用`new`关键字创建的

```javascript
function pro() {}
const obj = Object.create(pro.prototype)
console.log(obj.__proto__ === pro.prototype)  // true
console.log(pro.prototype.isPrototypeOf(obj))  // true
console.log(Object.getPrototypeOf(obj) === pro.prototype) // true
console.log(obj instanceof pro)
```

## 7.对象扩展

* `Object.preventExtensions`：将参数对象设置为不可扩展（添加新属性），可以删除与修改属性值以及修改所有属性描述符
* `Object.isExtensible`：当前对象是否可扩展（添加新属性）

```javascript
let obj = { one: 1 }
console.log(Object.isExtensible(obj))
obj.two = 2
Object.preventExtensions(obj)
obj.three = 3
console.log(Object.isExtensible(obj))
console.log(obj)
```

* `Object.seal`：将参数对象设为对于属性的操作除了修改属性值外无法做其他操作（修改属性描述符，删除属性，添加属性，）
* `Object.isSeal`：是否将参数对象设为只能修改属性值
* `Object.freeze`：将参数对象冻结（无法对参数对象做任何关于属性的操作，且不可修改原型，但如果参数对象的某一个属性值为对象，可以对这个对象属性值的的属性操作）
* `Object.isFrozen`：查看参数对象是否被冻结

## 8.属性描述符

对象的属性描述符可以为访问器属性符或数据属性符，两个属性符有两个地方相同，即`enumerable`（属性可遍历）和`configurable`（属性描述符可修改）

* writable：属性是否可写
* value：属性值
* get：getter
* set：setter
* enumerable：属性是否可遍历（除了`getOwnProopertyNames`，`getOwnProopertySymbols`和`getOwnProopertyDescriptors`这些获取非原型的属性的方法）
* configurable：是否可以修改属性的描述符和删除属性

可以通过`Object.defineProperty`，`Object.defineProperties`两个方法定义属性描述符

```javascript
// 数据属性符
Object.defineProperty(obj, 'one', {
    writable: true,
    value: 1,
    enumerable: true,
    configurable: true,
})
let bValue = 2
// 访问器属性符
Object.defineProperties(obj, 'two', {
    set: function(newValue) { bValue = newValue },
    get: function() { return bValue },
    enumerable: true,
    configurable: true,
})
```



## 其他

* `Object.getOwnPropertyDescriptor`
* `Object.getPrototypeOf`
* `Object.is`

## 实例方法

* `propertyIsEnumerable`
* `toLocaleString`
* `hasOwnProperty`
* `toString`
* `isPrototype`
* `valueOf`
* 

