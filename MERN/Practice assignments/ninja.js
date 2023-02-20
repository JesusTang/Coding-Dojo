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

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.nombre = nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`Lo que un programador peude hacer en un mes, dos programadores pueden hacerlo en dos meses.`)
    }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
