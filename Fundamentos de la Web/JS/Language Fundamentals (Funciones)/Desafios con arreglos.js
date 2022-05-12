//Siempre Hambriento
function alwaysHungry(arr) {
    // tu código aquí 
    var haycomida = 0
    for(i=0;i<arr.length;i++) {
        if(arr[i] == "comida") {
            console.log("delicioso")
            haycomida = true
        }
        else {haycomida = false}
    }
    if (!haycomida) {
        console.log("Tengo hambre")
    }
    console.log(haycomida)
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
//esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
//esto debería mostrar "Tengo hambre"


//Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for(i=0;i<arr.length;i++) {
        if (arr[i]>cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//Mejor que el promedio
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for(i=0;i<arr.length;i++) {
        sum += arr[i]/arr.length
    }
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for(i=0;i<arr.length;i++) {
        if(arr[i]>sum) {
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta


//Arreglo invertido
function reverse(arr) {
    // tu código aquí
    arrReversed = []
    for(i=arr.length-1;i>=0;i--) {
        arrReversed.push(arr[i])
    }
    return arrReversed;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//Arreglo de Fibonacci
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for(i=1;i<=n-2;i++) {
        fibArr.push(fibArr[i]+fibArr[i-1]) 
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
