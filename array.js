/*let marks=[97,82,67,78,90];
console.log(marks);
console.log(marks);
console.log(marks. length);
let heros=["don","chinmoy",];
console.log(heros);
*/
let films=["puspa2","ghatak","the man","spider man","the killer"];
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
console.log(`avg marks of the class =${avg}`);
