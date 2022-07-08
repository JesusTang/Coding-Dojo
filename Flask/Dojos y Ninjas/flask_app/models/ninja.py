# importar la función que devolverá una instancia de una conexión
from flask_app.config.mysqlconnection import connectToMySQL
# modelar la clase después de la tabla friend de nuestra base de datos
class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.fname = data['fname']
        self.lname = data['lname']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # ahora usamos métodos de clase para consultar nuestra base de datos

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        # asegúrate de llamar a la función connectToMySQL con el esquema al que te diriges
        results = connectToMySQL('esquema_dojos_y_ninjas').query_db(query)
        # crear una lista vacía para agregar nuestras instancias de friends
        ninjas = []
        # Iterar sobre los resultados de la base de datos y crear instancias de friends con cls
        for ninja in results:
            ninjas.append( cls(ninja) )
        return ninjas

    @classmethod
    def save_into_db(cls, data ):
        query = """
        INSERT INTO ninjas ( first_name , last_name , age, dojo_id) 
        VALUES ( %(fname)s , %(lname)s , %(age)s, %(dojo_id)s);"""
        # data es un diccionario que se pasará al método de guardar desde server.py
        return connectToMySQL('esquema_dojos_y_ninjas').query_db( query, data )

    @classmethod
    def get_one_specific(cls, data ):
        query = """
        SELECT * FROM ninjas 
        WHERE id = %(id)s;"""
        return connectToMySQL('esquema_dojos_y_ninjas').query_db( query, data )
