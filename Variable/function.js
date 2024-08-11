// 4.8.2024
function hello() {
    var a = "apple"
    console.log("Hello", a)

} hello()
// console.log(a) //error
function getNumber() {
    let a = 100
    console.log(a)

}
getNumber()
getNumber()

function mySelf() {
    let myself = "my name is mg mg live in ygn"
    console.log(myself)
    return myself;
}
mySelf()

function black() {
    document.bgColor = "black"
}
// black()

function sayHello(name, age) {
    console.log(`hello ${name}, age is ${age}`);
}
sayHello()
sayHello("popo")
sayHello("bobo", 20)
sayHello("mgmg", 30)
sayHello("popo", 25)

function login(email, password) {
    if (email === "admin@gmail.com"
        && password === "1234456789") {
        console.log("login success")
    } else {
        console.log("login failed")
    }
}
login()
login("admin@gmail.com", "123456789")
login("bobo@gmail.com", "123456789")


function sayHi(name = "john doe", age = 18) {
    console.log(`hi ${name} age is ${age}`)

}
sayHi()
sayHi("bobo")
sayHi("popo", 20)
const add = function (a = 0, b = 0) {
    return a + b
}
console.log(add())
console.log(add(1, 2))
console.log(add(4, 2))
console.log(add(4, 20))

// Arrow Function
const sayHi2 = () => console.log("sayHi")
sayHi2()
const sayHi3 = () => "sayHi"
console.log(sayHi3())

const test = _ => _
console.log(test())

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            console.log(a + b)
            break;

        case "-":
            console.log(a - b)
            break;
        case "*":
            console.log(a * b)
            break;
        case "/":
            console.log(a / b)
            break;
        case "%":
            console.log(a % b)
            break;

        default:
            break;
            console.log('wrong')
    }
}
calculator(2, 2, "+")
calculator(2, 2, "-")
calculator(2, 2, "*")
calculator(2, 2, "/")
calculator(20, 100, "%")





