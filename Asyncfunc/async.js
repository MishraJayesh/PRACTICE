//Asynchronous Function.

function app(){
    setTimeout(()=> {
        console.log("Starting Async Function");
}, 2000);
}
console.log("Hello,World!");
app();

//An Array Is Kept Under Async Function.

function async(){
    setTimeout(()=> {
        let a =[2,4,6,8,10,12,14,16,18,20]; //Array
        console.log(a);
    }, 2000);
}
console.log("Please Wait, Printing An Array");
async();

//Declaring setTimeout Function Outside The Function.
// Performing Arithmetic Operations.

function arithmetic(){
    let c = 8 ; d = 9 ; 
    console.log(c + d); //Addition
    console.log(d - c); //Subtraction
    console.log(c * d); //Multiplication
    console.log(d / c); //Division
    console.log(c % d); //Modulation
}
setTimeout(arithmetic, 2000);
console.log("Arithmetic Operations Will Print After 2 Seconds");

// setTimeout Inside A setTimeout Function.

function inside(){
    setTimeout(() => {
            setTimeout(() => {
                console.log("Inside An Asynchronous Function");
   }, 2000);
                console.log("Asynchronous Function");
},  2000);
}
inside();