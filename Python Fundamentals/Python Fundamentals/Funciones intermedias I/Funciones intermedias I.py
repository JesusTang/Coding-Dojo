#1. Actualizar valores en diccionarios y listas
from re import A


x = [ [5,2,3], [10,8,9] ] 
estudiantes = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
directorio_deportes = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'futbol' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#Cambios /////

#Cambio 1
x[1][0] = 15
print(x)

#Cambio 2
estudiantes[0]["last_name"] = "Bryant"
print(estudiantes[0])

#Cambio 3
directorio_deportes["futbol"][0] = ['Andres']
print(directorio_deportes)

#Cambio 4
z[0]["y"] = 30
print(z)



#2. Iterar a través de una lista de diccionarios
estudiantes = [
        {'first_name' : 'Michael'   , 'last_name' : 'Jordan'},
        {'first_name' : 'John'      , 'last_name' : 'Rosales'},
        {'first_name' : 'Mark'      , 'last_name' : 'Guillen'},
        {'first_name' : 'KB'        , 'last_name' : 'Tonel'}
    ]
def iterateDictionary(dictionary):
    for x in range(0,len(dictionary),1):
        for key, value in estudiantes[x].items():
            print(key,'-', value)
iterateDictionary(estudiantes)



#3. Obtener valores de una lista de diccionarios
def iterateDictionary2(a, dictionary):
    for x in range(0,len(dictionary),1):
        print(estudiantes[x][a])
iterateDictionary2('last_name', estudiantes)
iterateDictionary2('first_name', estudiantes)



#4. Iterar a través de un diccionarios con valores de lista
dojo = {
    'ubicaciones': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructores': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dictionary):
    for key, value in dojo.items():
        print(len(value), end=' ')
        print(key)
        for x in range(0,len(value),1):
            print(value[x])
printInfo(dojo)
