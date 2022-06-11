import mascot
import ninja

Firulais = mascot.Gato('Firulais', 'Huesos')
print(Firulais.tipo)

Itto = ninja.Ninja('Itto', 'Yuuji', 'Black Belt in C#', Firulais, 'Croquetas')
# print(Itto.mascota.nombre)
# Firulais.mostrar_estado()
Itto.caminar()
Itto.horadedormir()
Itto.bañar()
Itto.preguntarestado()