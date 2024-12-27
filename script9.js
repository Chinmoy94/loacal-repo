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