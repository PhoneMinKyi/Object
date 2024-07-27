// let data = new Array(100,200,'apple','orange')

// let arr = [100,200,true,false,'apple','orange','banana','grape',[1,2,3],{name:'js'}];
// arr[0] = 250
// arr[20] = "PHP"
// arr[15] =150
// console.log('arr index 0=>', arr[0])
// console.log('arr index 1 =>', arr[1])
// console.log('arr index 10 =>', arr[10])
// console.log('arr length=>', arr.length)
// console.log('latest index =>', arr[arr.length-1])
// console.log(arr);

// let fe =['html','css','js',[100,200,300],'reactjs','vuejs']
// let be = ['php','python','java',[100,200,300,['aa','bb','cc'],400],'nodejs']
// let fs =[fe,be]
// console.log('index 0',fs[0]);
// console.log('js',fs[0][2]);
// console.log('fe',fe);
// console.log('fe',fe[3])
// console.log('fs',fs);
// console.log('fs',fs[1][3])
// console.log('fs',fs[0][5]);
// console.log('fs',fs[1][3][3][2])
// console.log('fs',fs[1][3][4]);

//spread operator(...)
// let all = [...fe,...be]
// console.log('all',all);


//rest(...rest)
// let fe =['html','css','js','reactjs','vuejs']
// const[one,two,three,...four]=fe
// console.log('one',one);
// console.log('two',two);
// console.log("three",three)
// console.log('four',four);


// let userLists = [];
// userLists.push('bobo')
// userLists.push('mgmg')
// userLists.push('nono')
// userLists.push('popo')

// Push ka use myar
// userLists.unshift("john")
// userLists.unshift('smith')
// userLists.unshift('jane','doe')

// userLists.pop()
// // userLists.pop()
// // userLists.pop()
// userLists.shift()
// userLists.shift()
// console.log('userLists',userLists)


// let data = [1,2,100,200,300,'a','b','c','mgmg@gmail.com','apple','orange','banana']
// let a = 'apple'
// console.log(Array.isArray(a));
// console.log(Array.isArray(data));
// console.log(data.indexOf("mgmg@gmail.com"))
// console.log(data.splice(8,1));
// console.log(data.splice(8,2));
// console.log(data.splice(9,1,'water-melon'));
// console.log(data.splice(10,1,"strawberry"));
// console.log(data);
// console.log(data.includes(300));
// console.log(data.includes(400));



let arr = [3,5,6,8]
let res = arr.find((n) => n% 2 === 0); //6
let index = [2,4,30,5].findIndex((n) => n % 2 !==0); //index 3
console.log("index",index);
let every = [2,3,4,5].every((x) => x<6);// true
console.log("every",every);
let some = [3,5,6,8].some ((n) => n > 6); //true
console.log("some",some)
let reverse = [1,2,3,4].reverse();//[4,3,2,1]
console.log("reverse",reverse);
let negative = [3,5,7,8].at(-2);//7
console.log("negative",negative);

let name = ['zawzaw','bobo','aungaung','coco','gogo','jane doe']
console.log('name.sort()',name.sort())

let numbers = [1,100,2,200,3,4,5,20000,12000,3200,40,50,70]
console.log('numbers.sort()',numbers.sort((a,b)=>a-b));

console.log('numbers.sort()',numbers.sort((a,b)=>b-a));




