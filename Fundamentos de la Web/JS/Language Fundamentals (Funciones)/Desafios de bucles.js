
//Imprimir impares 1-20
for(i=1;i<21;i++) {
    if (i%2!=0) {
        console.log(i)
    }
}

//Disminuir multiplos de 3
for(i=100;i>0;i--) {
    if(i%3==0) {
        console.log(i)
    }
}

//Imprime la secuencia
for(i=4;i>-4;i-=1.5) {
    console.log(i)
}

//Sigma
var sum = 0
for(i=0;i<101;i++) {
    sum+=i
}
console.log(sum)

//Factorial
var product = 1
for(i=1;i<13;i++) {
    product*=i
}
console.log(product)