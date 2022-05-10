function myBirthYearFunc(){
        console.log("Nací en " + 1980);
    }
// Cuando se llame a esta función, console.log escribirá "Nací en 1980", 
// a pesar de 1980 ser una variable numérica y "Nací en " ser una variable cadena

function myBirthYearFunc(EntradaAñoNacimiento){
        console.log("Nací en " + EntradaAñoNacimiento);
    }
// Cuando se llame a esta función, console.log escribirá "Nací en 1980"

function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }
// Cuando se llame a esta función, se escribirá "¡Sumando números!" y se
// mostrarán los números "num1" y "num2", luego se mostrará la suma de las variables num1 y num2
