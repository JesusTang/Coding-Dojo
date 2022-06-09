# 1. Cuenta regresiva: crea una función que acepte un número como entrada. Devuelve una lista nueva que cuente de uno en uno, desde el número (como elemento 0) hasta 0 (como último elemento). 
#       Ejemplo: countdown(5) debería devolver [5,4,3,2,1,0]

def countdown(start):
    array = []
    for x in range(start,-1,-1):
        array.append(x)
    print(array)
countdown(5)

# 2. Imprimir y devolver: crea una función que reciba una lista con dos números. Imprime el primer valor y devuelve el segundo.
#       Ejemplo: imprimir_y_devolver([1,2]) debe imprimir 1 y devolver 2

def imprimir_y_devolver(array):
    print(array[0])
    return array[1]
imprimir_y_devolver([1,2])


# 3. Primero más longitud: crea una función que acepte una lista y devuelva la suma del primer valor de la lista, más la longitud de la lista.
#       Ejemplo: primero_mas_longitud([1,2,3,4,5]) debe devolver 6 (primer valor: 1 +length: 5)

def primero_mas_longitud(array):
    return (array[0]+len(array))
x = primero_mas_longitud([1,2,3,4,5])
print(x)


# 4. Valores mayores que el segundo: escribe una función que acepte una lista y cree una nueva que contenga solo los valores de la lista original que sean mayores que su segundo valor. Imprime cuántos valores son y luego devuelve la lista nueva. Si la lista tiene menos de 2 elementos, has que la función devuelva False
#       Ejemplo: valores_mayores_que_el_segundo([5,2,3,2,1,4]) debe imprimir 3 y devolver [5,3,4]
#       Ejemplo: valores_mayores_que_el_segundo([3]) debe devolver False

def valores_mayores_que_el_segundo(array):
    tempArray = []
    for x in range(0,len(array),1):
        if array[x]>array[1]:
            tempArray+=[array[x]]
    if len(tempArray)<2:
        return False
    else:
        print (len(tempArray))
        return tempArray
x = valores_mayores_que_el_segundo([5,2,3,2,1,4])
print(x)

# 5. Esta longitud, ese valor: escribe una función que acepte dos enteros como parámetros: tamaño y valor. La función debe crear y devolver una lista cuya longitud sea igual al tamaño dado, y cuyos valores sean todos el valor dado.
#       Ejemplo: length_and_value(4,7) debe devolver [7,7,7,7]
#       Ejemplo: length_and_value(6,2) debe devolver [2,2,2,2,2,2]

def length_and_value(a,b):
    array = []
    for x in range (0,a+1,1):
        array.append(b)
    print(array)
length_and_value(6,2)