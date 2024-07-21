// 'use strict'
// var,let,const

//var is global variable

// var a = "apple"

// {var a ="orange"

// }
// console.log(a)

let a = 100;
a = "avocado"
{
    // let a = 100
    console.log('inside a',a)
}
// let a = "apple"
console.log("outside a",a)

// const aa = 100
a = "apple"
{
    const aa =100
    console.log("inside aa",aa)
}
const aa = "orange"
console.log("outside aa",aa);
