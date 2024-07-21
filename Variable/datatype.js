// Primitive Datatype
// String,Number,boolean,Nan,null,undefined,Symbol
// ("",'',``)

let a = 100;
console.log("a is",typeof a)
let aa = "100"
console.log("aa is",typeof aa)
let t = true;
console.log('t => ',typeof t)
let n = null;
console.log("n =>",typeof n)
let aaa;
console.log("aaa is",typeof aaa)
let s = Symbol("symbol")
console.log("s is",typeof s)
let ans = aaa / 20
console.log(ans)
console.log("ans =>",typeof ans);//bug (error
// let c =cat;
// console.log(c)

// non-primitive datatype
// Function,Object ,array
let obj ={name:"bobo"}
console.log(typeof obj)
let arr =[1,2]
console.log(typeof arr)
const fn = () => Hello
console.log(typeof fn)