/* const obj = Object.create({}, {
	one: {
		value: 1,
		writable: true,
		enumerable: true,
		configurable: false,
	},
	two: {
		value: 2,
		writable: false,
		enumerable: false,
		configurable: false,
	},
	[Symbol('one')]: {
		value: 'one',
		writable: true,
		enumerable: true,
		configurable: false,
	},
	[Symbol('two')]: {
		value: 'two',
		writable: false,
		enumerable: false,
		configurable: false,
	}
})

for (const key in obj) {
		const val = obj[key];
		console.log(key, val, 'key');
}
console.log('getOwnPropertyNames', Object.getOwnPropertyNames(obj))
console.log('entries', Object.entries(obj));
console.log('values', Object.values(obj));
console.log('keys', Object.keys(obj));
console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(obj));
console.log('getOwnPropertySymbols', Object.getOwnPropertySymbols(obj));
console.log(JSON.stringify(obj)); */

const obj = { one: 1 }
console.log(Object.getOwnPropertyDescriptor(obj, 'one'));
Object.preventExtensions(obj)
Object.defineProperty(obj, 'one', { writable: false, enumerable: false, configurable: false })
console.log(Object.getOwnPropertyDescriptor(obj, 'one'));
