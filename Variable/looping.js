// 28.7.2024
const userList = [
    { id: 1, name: "bobo", email: "bobo@gmail.com", age: 20, gender: "male", address: "yangon" },
    { id: 2, name: "coco", email: "coco@gmail.com", age: 21, gender: "female", address: "mandalay" },
    { id: 3, name: "dodo", email: "dodo@gmail.com", age: 22, gender: "gay", address: "bago" },
    { id: 4, name: "eoeo", email: "eoeo@gmail.com", age: 23, gender: "male", address: "bago" },
    { id: 5, name: "boco", email: "boco@gmail.com", age: 24, gender: "female", address: "monyawr" },
    { id: 6, name: "bodo", email: "bodo@gmail.com", age: 25, gender: "male", address: "taung gyi" },
    { id: 7, name: "boeo", email: "boeo@gmail.com", age: 26, gender: "gay", address: "tanintharyi" },
    { id: 8, name: "eo", email: "eo@gmail.com", age: 27, gender: "male", address: "yangon" },
    { id: 9, name: "ebo", email: "ebo@gmail.com", age: 20, gender: "male", address: "yangon" },
]
// For Loop
// for (let i = 0; i < userList.length; i++) {
//     const user = userList[i];
//     const {name,email,age,gender,address} = userList[i]
    // if (gender === "female"){
    //     console.log(`name is ${name} age is ${age} and live in ${address} gender is ${gender}`)
    // }
//     if(address === "yangon" && gender === "male" ){
//         console.log(`name is ${name} age is ${age} and live in ${address} gender is ${gender}`)
//     }

    // let info = `Name is ${user.name} age is ${user.age} and live in ${user.address} gender is ${user.gender}`
    // console.log(info);
// }

// // For Each
// userList.forEach(user => {
//     // console.log(us)er)
//     const {name,email,age,gender,address} = user;
    // if(gender === "male"){
    //     console.log(`name is Mr.${name} and email is ${email}`)
    // }else{
    //     console.log(`name is Ms.${name} and email is ${email}`)
    // }

    // if(age === 23
        // console.log(`name is Mr.${name} and age is ${age}`)
// });

// for (const i in userList) {
//     // console.log(userList[i])
//         // const user = userList[i];
//         // console.log(user.name, user.age,user.gender )
//     }

    // let bobo = userList[0]
    // for (const i in bobo) {
    //     // console.log(i);
    //     // console.log(bobo[i]);
    //     // console.log(`${i} is ${bobo[i]}`)     
    //     }

    //     let coco = userList[1]
    //     for (const i in coco) {
    //        console.log(coco[i])
    //     }

        // i is key 
    

        // For OF
// for (const u of userList) {
//     // console.log(u);
//     const {name,age,gender,address} = u
//     console.log(`name is ${name} and age is ${age} and Gender is ${gender}`);
    
// }

// MAP,Filter,Reduce

//MAP
let all = userList.map (u => `${u.name} ${u.email} ${u.gender}`)
// console.log(all)
// let name =userList.map(u => u.name)
// console.log(name)
// let age = userList.map(u => u.age)
// console.log(age)
// let address = userList.map(u => u.address)
// console.log(address)

// Filter
let res =userList.filter(u => u.address !== "yangon").map(u => u.name)
console.log(res)

// Reduce
let cart = [100,200,300,500,560,770,800,9000]
let total = cart.reduce((a,b) => a+b, +500)
let total1 = cart.reduce((a,b) => a+b, +1)

console.log(total);
console.log(total1);

