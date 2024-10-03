// let testArr = new Int8Array(new Int32Array([515]).buffer);

// console.log(testArr[0], testArr[1], testArr[2], testArr[3]);
// console.log(new Int16Array([32768])[0], new Uint16Array([32768])[0]);
//these are some of the examples that I am working on as I learn JS
// const foo = new String ('foo');
// console.log(foo);
// console.log(typeof foo);
// String.prototype.printUpperCase = function() {
//     console.log(this.toUpperCase());
// }
// 'hello'.printUpperCase();
// s.prototype.toUpperCase.call(String());
names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.filter(name => name.length > 5).sort().forEach(name => console.log(name.toUpperCase()));
