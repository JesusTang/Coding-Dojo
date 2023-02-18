// let x = 5;
// let y = 2;
// let z = 0;
// console.log(x + x);
// console.log(y - z);
// console.log(z ^ x);

// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//         var name = names[index];
    
//         console.log(name + ' was found at index ' + index);
//         }
//         console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
//     }
// printNames(beatles);       

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//             const name = names[index];
    
//             console.log(name + ' was found at index ' + index);
//             // console.log(index);
//             }
//             console.log(index);
//         }
//         actuallyPrintingNames();
//     }
// printNames(beatles);

// console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";

// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);

// magicalUnicorns();
// var magicalUnicorns = function(){
//     console.log("Will it blend?");
// }

// console.log("Don't breathe this!");

// const nombre = 'Pedro'

// function saludar(name) {
//     const nombre = name
//     console.log("hola" + nombre)
// }
// saludar('Maria')

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key); // value
// console.log(secondKey); //
// console.log(secondKey[0]); //
// console.log(willThisWork); //

const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false
console.log(myVar)