class Mascota:
    def __init__(self, nombre, golosinas, tipo):
        self.nombre = nombre
        self.tipo = tipo
        self.golosinas = golosinas
        self.salud = 50
        self.energia = 20

    def dormir(self): #incrementa la energía de la mascota en 25
        self.energia += 25
        return self

    def comer(self):  #incrementa la energía de la mascota en 5 y la salud en 10
        self.salud += 5
        self.energia += 10
        return self

    def jugar(self):  #incrementa la salud de la mascota en 5
        self.salud += 5
        return self

    def mostrar_estado(self):
        print(f'Tengo {self.salud} puntos de salud y {self.energia} puntos de energia')

    def ruido(self):  #imprime el sonido que produce la mascota
        print("¿No lo sé hermano, qué quieres que te diga? Soy un animalito.")
        return self



class Perro(Mascota):
    def __init__(self, nombre, golosinas):
        super().__init__(nombre, golosinas, tipo='Perro')	
    def ruido(self):
        return 'Guau!'


class Gato(Mascota):
    def __init__(self, nombre, golosinas):
        super().__init__(nombre, golosinas, tipo='Gato')	
    def ruido(self):
        return 'Miau!'


class Tortuga(Mascota):
    def __init__(self, nombre, golosinas):
        super().__init__(nombre, golosinas, tipo='Tortuga')	
    def ruido(self):
        return 'aaaaa!'


class Cerdito(Mascota):
    def __init__(self, nombre, golosinas):
        super().__init__(nombre, golosinas, tipo='Cerdito')	
    def ruido(self):
        return 'Oink!'


class Loro(Mascota):
    def __init__(self, nombre, golosinas):
        super().__init__(nombre, golosinas, tipo='Loro')	
    def ruido(self):
        return f"¡Arrr, A bañarse {self.name}, arrr!"


