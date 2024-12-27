//primitive 
//7 types :string,Number,boolearn,null,undefined,symbol,bigint
const score= 100
const scoreValue=100.3
const isLoggin=false
const outsideTemp=null
let userEmail = undefined;
const id = Symbol('234')
const anotherId = Symbol('234')
console.log(id===anotherId);
const bigNumber =4578n

//reference(Non primitive)
// Array, Objects,Functions
const heros =["shaktiman","superman","spiderman"]
let myObj ={
    name:"chinmoy",
    age:30,
}
const myFunction=function(){
    console.log("chinmoy");
}
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof bigNumber);
// stack and heap
//stack -primitive , heap-non primitive
let myName="chinmoy";
let anotherName=myName;
anotherName="aarush";
console.log(myName);
console.log(anotherName);
let userOne ={
    email:"chinmoy2gmail.com",
    upi:"chinmoy@icici",
}
let userTwo=userOne
userTwo.email="chinmoy3gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//String
//String interpolation
const name="chinmoy"
const repoCount =50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String("pubg");
console.log(gameName[3]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));
const newString=gameName.substring(1,3);
console.log(newString);
const anotherString=gameName.slice(2,3);
console.log(anotherString);
const newStringOne= "      chinmoy   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="https://chinmoymanna.com 40%"
console.log(url.replace('40%',))
console.log(name.split('-'));
//number and maths
const score1 = 400
console.log(score);
const balance =new Number(500)
console.log(balance);
console.log(balance.toFixed(2));
const otherNumber=34.554
console.log(otherNumber.toPrecision(2));
const hunderds=100000
console.log(hunderds.toLocaleString('en-IN'));
//maths library
/*console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));*/
console.log((Math.random()*10)+1);
const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min +1)+min));
//Dates
let myDate = new Date()
console.log(myDate.toISOString());
console.log(typeof myDate);
//let myCreateDate = new Date(2025, 0,23)
//console.log(myCreateDate.toDateString());
let myCreateDate = new Date("12-28-2024")
console.log(Math.floor(Date.now()/1000));
let newDate = newDate("12-25-2024")
console.log(newDate.getMonth()+1);

/*const factorial =(n) =>{
    if(n===0){
        return 1;
    } else {
        return n* factorial(n-1);
    }
};
console.log(factorial(n));
const fibonacci =(n) =>(n <=2 ?1 : fibonacci(n-1) + fibonacci(n-2));
console.log(fibonacci(10));*/
//Arrays
const myArr =[0,1,2,3,4,5] 