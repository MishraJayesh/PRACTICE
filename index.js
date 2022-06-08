var name = 'JAYESH';
var a = [1,2,3, 'JAYESH', true, false]

var student = {
    name: 'Jayesh',
    age: 22,
    graduation: 'BSc',
    covidVaccine: true,
};

function Roll(){
 console.log('Roll No.')   
}

function Div(){
    setTimeout(() => {
        console.log('Div.')   
    }, 2000);
 
}

function Programm(){
 console.log('Programm')   
}

function arithmetic(a, b) { console.log(a + b); 
                            console.log(b - a); 
                            console.log(a * b); 
                            console.log(b / a); 
                            console.log(a % b);
                            console.log( a++);
                            console.log(b--);
                            console.log( a ** 2);
}

function assignment(a, b) { console.log( a += 5);
                            console.log( a *= 5);
                            console.log( a -= 5); 
                            console.log( b /= 5); 
                            console.log( a %= 5);
                            console.log( a **= 5);
}

Roll();
Div();
Programm();