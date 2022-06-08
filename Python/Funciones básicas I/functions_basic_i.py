#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())

#Esto imprimirá el numero 5 en el terminal

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())

#Esto imprimirá la suma de lo que sea que esté del primer lado. Si es días de semana+5 = 12. Si es lados de triángulo+5 = 8. Lo de Silicon no lo entiendo, estará mal traducido 

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())

#Esto imprimirá el 5 porque al llamar la función solo se ejecutará el primer return, el 2do nunca se ejecuta.

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())

#Igual que el caso anterior, solo se imprime el número 5 porque la línea de código después del return jamás se ejecuta.

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)

#Se imprime el número 5 ya que la variable x ahora equivale a la función, y al llamar a x se llama también a la función que imprime el valor 5.

#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))

#Como la función add(b,c) no retorna el valor de la suma, al intentar imprimir la suma de (add(1,2) y (add,2,3) arroja un error porque no están definidos. Solo se imprime la suma de 1 y 2, y de 2 y 3.

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))

#La función convierte a 2 y 5 a cadenas y las imprime juntas: 25

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())

#Primero la función imprime el valor de b, o sea 100 y luego, si b es menor que 10 retornará el valor de 5 y este se imprimirá también, si no es menor que 5 retonará 10 y se imprimirá. el return 7 jamás se imprime porque gracias a los if y else statements no se llega a esa línea de código.

#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))

#Imprime 7, luego 14, luego la suma de 7 y 14 (21). El return 3 jamás se ejecuta por los if/else statements.

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))

#Suma 3 y 5 e imprime el valor, el 2do return jamás se ejecuta.

#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)

#Imprime 500, luego 500 de nuevo, luego 300, y luego 500 porque el b = 300 solo tiene alcance dentro de la función foobar()

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)

#Imprime exactamente lo mismo que el ejemplo #11. Solo que ahora la función foobar() retorna el valor de b (300), pero jamás se imprime.

#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)

#Imprime valor de b, 500, imprime 500 de nuevo porque aún no se llama a la función que cambia el valor de b. Se cambia el valor de b a la función foobar(). se imprime 300 y luego se imprime 300 de nuevo porque retorna el valor de b (300).

# #14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()

#Imprime 1, luego 3 y luego 2.

#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)

#Imprime 1, luego 3, luego 5 y finalmente 10