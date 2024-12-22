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