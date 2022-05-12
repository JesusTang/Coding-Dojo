function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppings) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("corteza rellena con queso", "marinara", ["parmesano", "mozzarella"], ["pepperoni", "piña", "jamón ibérico"]);
var p4 = pizzaOven("sin corteza", "marinara", ["gouda", "paremesano"], ["salchicha italiana", "salami", "cebollas", "tocino"]);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

