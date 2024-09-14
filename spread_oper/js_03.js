// SPREAD OPERATOT 


// make a duplicate array 

const arr = [1,2,3,4,5,6];
const duplicatearr =[...arr, 7,8,9,10,"apple","banana"];
console.log(duplicatearr);



// Q megrge two array 

const num1 =  [1,2,3,4,5];
const num2 = [6,7,8,9,10];
 const result = [...num1 , ...num2];
 console.log(result);
 

 // object 

 const obj1 = {
         a:1 ,
         b: 2,
 };
 const obj2 = {
         c :"Hello" ,
         d : "developers"
 };

 const result1 = {...obj1 , ...obj2};
 console.log(result1);



 // spreaed operator is also used in function 

  // function 
   function sum (...numbers){
         
          let sum = 0;
         for(let i =0; i< numbers.length; i++) {
                   sum += numbers[i];
         }
         return sum;
         

   }
   console.log(sum(1,2,3,4,5,6));
   