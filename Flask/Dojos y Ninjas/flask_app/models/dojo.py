# importar la función que devolverá una instancia de una conexión
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja
# modelar la clase después de la tabla friend de nuestra base de datos
class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # ahora usamos métodos de clase para consultar nuestra base de datos
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        # asegúrate de llamar a la función connectToMySQL con el esquema al que te diriges
        results = connectToMySQL('esquema_dojos_y_ninjas').query_db(query)
        # crear una lista vacía para agregar nuestras instancias de friends
        users = []
        # Iterar sobre los resultados de la base de datos y crear instancias de friends con cls
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def save_into_db(cls, data ):
        query = """
        INSERT INTO dojos ( name ) 
        VALUES ( %(name)s );"""
        # data es un diccionario que se pasará al método de guardar desde server.py
        return connectToMySQL('esquema_dojos_y_ninjas').query_db( query, data )

    @classmethod
    def get_one_specific(cls, data ):
        query = """
        SELECT * FROM dojos 
        WHERE id = %(id)s;"""
        return connectToMySQL('esquema_dojos_y_ninjas').query_db( query, data )

    @classmethod
    def get_dojo_with_ninjas( cls , data ):
        query = """SELECT * FROM dojos JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(dojo_id)s;"""
        results = connectToMySQL('esquema_dojos_y_ninjas').query_db( query , data )
        # los resultados serán una lista de objetos topping (aderezo) con la hamburguesa adjunta a cada fila 
        # print(results)
        if not results:
            return False

        print('There should be results here'+str(results))
        dojo = cls( results[0] )
        for row_from_db in results:
            # ahora parseamos los datos de hamburguesa para crear instancias de hamburguesa y agregarlas a nuestra lista
            # print(row_from_db)
            ninja_data = {
                "id" : row_from_db["ninjas.id"],
                "fname" : row_from_db["first_name"],
                "lname" : row_from_db["last_name"],
                "age" : row_from_db["age"],
                "created_at" : row_from_db["ninjas.created_at"],
                "updated_at" : row_from_db["ninjas.updated_at"]
            }
            dojo.ninjas.append( ninja.Ninja(ninja_data) )
        return dojo