class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 20;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(`My name is ${this.nombre}!`)
    }
    showStats() {
        console.log(`${this.nombre} has ${this.salud} points of health, ${this.fuerza} strength and ${this.velocidad} speed!`)
    }
    drinkSake() {
        this.salud += 10
        console.log(`${this.nombre} just drank sake! His health is now ${this.salud}`)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
