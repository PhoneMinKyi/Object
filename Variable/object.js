// Key is value
const user = {
    name: "bobo",
    age: 20,
    email: "bobo@gmail.com",
    isDev: false,
    hobbies: ["reading", "painting", "coding",],
    friends: ["aungaung", "jane doe"],
    phone: "(124)127277",
    skills: ["JavaScript", "Python", "Node js"],
    address: {
        street: "123 Main St",
        city: "New York"
    },
    // getInfo(){
    //     return `Name: ${this.name}, Age: $(this.age), Email: $(this.email), he is ${this.isDev ? "Developer":"Designer"}`
    // }


    getInfo() {
        return `Name: ${this.name.toLocaleUpperCase}, Age: $(this.age), Email: $(this.email), he is ${this.isDev ? "Developer" : "Designer"}`
    }

}

// console.log(user)
// console.log(user["name"])
// console.log(user['iseDev'])
// console.log(user.hobbies)
// console.log(user['hobbies'][0])
// console.log(user.address.city);
// console.log(user["address"]["street"]);




// let user1 = user
// user1.name = "rose"
// user1.age = "30"
// user1.email = "rose@gmail.com"
// user1.isMarried = "false"
// console.log(user1.getInfo())
// console.log(user1)
// console.log(user)
// let a = "apple"
// let b = a
// b = "bottle"
// console.log(b)
// console.log(a)


// Object is detructure
// const {name,age,hobbies,address,phone,email,isDev,friends} = user
// console.log(`name is ${name} and age is ${age} and phone is ${phone} and email is ${email} live at ${address.city}`)


const userList = [
    { id: 1, name: "bobo", email: "bobo@gmail.com", age: 20, gender: "male", address: "yangon" },
    { id: 2, name: "coco", email: "coco@gmail.com", age: 21, gender: "fmale", address: "mandalay" },
    { id: 3, name: "dodo", email: "dodo@gmail.com", age: 22, gender: "gay", address: "bago" },
    { id: 4, name: "eoeo", email: "eoeo@gmail.com", age: 23, gender: "male", address: "bago" },
    { id: 5, name: "boco", email: "boco@gmail.com", age: 24, gender: "female", address: "monyawr" },
    { id: 6, name: "bodo", email: "bodo@gmail.com", age: 25, gender: "male", address: "taung gyi" },
    { id: 7, name: "boeo", email: "boeo@gmail.com", age: 26, gender: "gay", address: "tanintharyi" },
    { id: 8, name: "eo", email: "eo@gmail.com", age: 27, gender: "male", address: "yangon" },
    { id: 9, name: "ebo", email: "ebo@gmail.com", age: 20, gender: "male", address: "yangon" },
]

// console.log(userList)
// console.log(userList[0].email)
// console.log(userList[0].gender)
// console.log(userList[2].address)

//Array Destructure
// const [user1,user2,user3,user4,user5,user6,user7,user8,user9] = userList
// console.log(user1)
// console.log(user1.address);

//Object Destructure
// const {name,email,age,gender,address} = user2
// console.log(`name is ${name} and age is ${age} and gender is ${gender} and email is ${email} live at ${address}`)

// let str =JSON.stringify(userList)
// console.log(str)
// plain text

// let arr = JSON.parse(str)
// console.log(arr)
//return array

const dice = {
    sides: 6,
    roll(count) {
        let a = [];
        let b = [];
        for (let i = 0; i < count; i++) {
            let res = Math.floor(Math.random() * this.sides + 1);
            if (res <= 3) {
                a.push(res)
            } else {
                b.push(res)
            }
        }

        console.log("a result is =>" + a);
        console.log("b result is =>" + b);
        console.log(`a win ${a.length}`);
        console.log(`b win ${b.length}`);

        if (a.length === b.length) {
            document.write("Game is Draw")
            console.log("game is draw")
        } else {
            if (a.length > b.length) {
                document.write("a winner")
                console.log("a winner")
            } else {
                document.write("b winner")
                console.log("b winner")
            }
        }
    }
}
dice.roll(10)
