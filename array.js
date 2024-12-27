/* artimetic Operators
let a = 5;
let b = 2;
console.log("a=",a,"& b=",b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
//unary operator
a++;
console.log("a++=",a++);
console.log("a=",a);
a--;
console.log("a--=",a--);
++a;
console.log("a=",a);
//Asignment Operators
a+=4;
console.log("a=",a);
a**=4;
console.log("a=",a);
//comparison opperators
console.log("5>=3",a>=b);
//Logical operator
let cond1 =a<b;
let cond2 = a===5;
console.log("!(5<3)= ",!(a>b), ! (a===5));
//conditional Statement
/*let age=25;
if(age>=18){
    console.log("you can vote");
}
let mode="blue";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);
let age=18;
if(age>=18){
    console.log("vote");
}else{
    console.log("not vote");
}
// odd even
let num=97;
if(num%2===0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}
// syntax->

let room ="siver";
let colour;
if(room==="dark"){
    colour="black";
} else if(room==="blue"){
    colour="blue";
} else if(room==="pink"){
    colour="pink";
}else{
    colour="white";
}
console.log(colour);*/
//Ternary operators
/*let age = 25;
let result = age>=18 ? console.log ("adult") : console.log("not adult");
alert("hello chinmoy");
let name=prompt("box");
console.log("name");*/
/*let num =prompt("enter a number");
if(num%5===0){
    console.log(num, "number is multiple of 5");
}else{
    console.log(num,"num is not multiple of 5");
}*/
/*let score=95;
let grade;
if(score>=90 && score<=100){
    grade=" Grade";
}
/* console.log(" grade :", grade);

    let score=75;
    let grade;
    if(score>=70 &&  score<=90){
        grade="B Grade";
    }

    console.log("grade:",grade);*/
/*const profile={
    username:"@chinmoy",
    isFollow:false,
    followers:123,
    following:123,
};
console.log("profile")
*/
/*for(let count=1; count<=5; count++){
    console.log("chinmoy");
}*/
// calculate sum of 1to5
/*let sum=0;
let n=100;
for(let i=1; i<=n; i++){
    sum=sum+i;
}
console.log("sum=",sum,);*/
/*for(let i=10; i<=25; i++){
    console.log(i);
}*/
/*let i=5;
while(i<=10){
    console.log(i);
    i++;
}*/
/*let i=1;
do{
    console.log(i);
    i++;
} while(i<=10);*/
 /*let str="chinmoy";
 let size=0;
 for(let i of str){
    console.log("i=",i);
    size++;
 }
 console.log("string size=",size);*/
 /*let student={
    name:"Chinmoy Manna",
    age:26,
    percentage:7.6,
    isPass:true,
 };
 for(let key in student){
    console.log("key=",key,"value=", student[key]);
 }*/
//practice
/*for(let num=0;num<=100;num++){
    if(num%2!==0){
        console.log(num);
    }
}*/
//practice 2
/*let gameNum=25;
let userNum=prompt("Guess the game number:");
while(usernum!=gamNum){
    userNum=prompt("you entered wrong number,Guess agian:");
}
console.log("congatulations, you enterd the right number");
*/
//strings
/*let str="chinmoy";
console.log(str[4]);*/
//template literals
//let sentence=`This is a book`;
//console.log(typeof sentence);
/*let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupess`;
console.log("the cost of",obj.item,"is",obj.price, "rupees");*/
/*let str="Chinmoy";
let newStr=str.toUpperCase();
console.log(str);
console.log(newStr);*/
/*let str="AARUSH";
str=str.toLowerCase();
console.log(str);*/
/*let str="     chinmoy manan   ";
console.log(str.trim());*/
/*let str="chinmoy";
console.log(str.slice(1,5));*/
/*let str1 = "chinmoy";
let str2 ="manna";
let res ="my name is" + str1 +str2;
console.log(res);*/
let str="chinmoy";
console.log(str.replace(i,o));
let fullName = prompt("enter your fullname without spaces");
let userName= "@"+fullName + fullName.length;
console.log(userName);

 /*let marks=[97,82,67,78,90];
console.log(marks);
console.log(marks);
console.log(marks. length);
let heros=["don","chinmoy",];
console.log(heros);
*/
/*let films=["puspa2","ghatak","the man","spider man","the killer"];
for (let i=0; i<films.length; i++){
    console.log(films[i]);
}
let cities=["delhi","mumbai","pune","kolkata",];
for(let city of cities){
  console.log(city.toUpperCase());
}
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class =${avg}`);*/
//function
function myFunction(){
  console.log("hello from myFuction");
}
 myFunction();
 myFunction();
 myFunction();
 myFunction();
 function myFuction(msg){
      console.log(msg);
 }
 myFuction("I love Aarush");
 function sum (a,b){
      console.log(a+b);
 }
  sum(19,20);
  let val =(10,34);
  console.log(val);
  function sum (a,b){
    return a+b;
  }
  function sum (a,b){
     }
     function sum(a,b){
          return a+b;
     } 
     const arrowSum =(a,b) =>{
      console.log(a+b);
     }
     arrowSum(10,20);
     function mul(a,b){
        return a*b;
     }
     mul(10,30);
     function countVowles(Aarush){
       let count=0;
       for(let char of Aarush){
        if(
          char==="a" || char==="e" ||  char==="i"  ||
          char==="o"  || char==="u"
        ){
          count++;
        }
       } 
       return count;
     }
      console.log(countVowles("Aarush"));
 let countVowl=(Aarush)=>{
  let count=0;
       for(let char of Aarush){
        if(
          char==="a" || char==="e" ||  char==="i"  ||
          char==="o"  || char==="u"
        ){
          count++;
        }
       } 
       return count;
     }
      console.log(countVowl("Aarush"));
  let arr=[1,2,3,4,5,6,7,8,9,10];
  arr.forEach(function(val){
    console.log(val);
  });
  arr.forEach((val)=>{
    console.log(val);
  });
  let array=["a","b","c","d","e"];
  array.forEach((val,idx,array)=>{
    console.log(val.toUpperCase(),idx,array);
  })
 let arry=[27,49,65,81];
 arry.forEach((num)=>{
    console.log(num*num);
 })
