class Ninja:
    def __init__(self, nombre, apellido, premios, mascota, comida_mascota):
        self.nombre = nombre
        self.apellido = apellido
        self.premios = premios
        self.mascota = mascota
        self.comida_mascota = comida_mascota


    def caminar(self): #pasea a la mascota del ninja invocando el método de mascota jugar()
        print("Quien es un buen chico?", self.mascota.ruido(), f"Si {self.mascota.nombre} tu eres un buen chico!")
        self.mascota.jugar()
        pass
    def alimentar(self):# alimenta a la mascota del ninja invocando el método de mascota comer()
        print(f"Toma {self.mascota.nombre}, es hora de la comida!")
        self.mascota.comer()
        pass
    def bañar(self): #limpia la mascota del ninja invocando el método de mascota sonido()
        print(f"A banharse {self.mascota.nombre}!")
        self.mascota.ruido()
        return self

    def horadedormir(self):
        print(f"Creo que ya es hora de dormir {self.mascota.nombre}.")
        self.mascota.dormir()
        
    def preguntarestado(self):
        print(f"Como te sientes {self.mascota.nombre}?")
        self.mascota.ruido()
        self.mascota.mostrar_estado()