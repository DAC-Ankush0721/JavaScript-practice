 // // function declaration
// function sum(num1, num2){
//    console.log(num1+num2);
// }
 
// sum(100,200); // call

// // function expression

// const sumOfTwoNumber = function (num1, num2){
//     console.log(num1+num2);
// };

// sumOfTwoNumber(1,2);


/// calback function




const doSomething =function (calback){
    console.log("samose ban rahe hai...");
    setTimeout(function(){

        callback();

    } ,  5000);
}

const callback =  function (){
    console.log("samose  ready hai ");
    
}

doSomething(callback);