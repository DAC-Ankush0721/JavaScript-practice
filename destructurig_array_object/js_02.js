
// we can destructing in object and array



const arr =  [1,2,3,4,5];

console.log(arr[1]);
console.log(arr[2]);

const [a,b,c,d,e] = arr  // this is called array distructuering 
console.log(e);      


//object destructring 

const person ={
    name : "Ankush khandare",
    age : 24,
    gender : "Male",
    address :"Maharashtra"
};

//acces value 


console.log(person.gender); //do notation

console.log(person["age"]); // bracket notation

//destructring 

const {name ,age , gender, address} = person;
console.log(gender,name,age,address);
//console.log(gender,name,age,address); if we print like this then output will come like this Male Ankush khandare 24  Maharashtra 


//so better to print one by one  
console.log(name);
console.log(age);
console.log(gender);
console.log(address);
