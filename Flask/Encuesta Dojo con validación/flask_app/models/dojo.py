from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.nombre = data['nombre']
        self.ubicacion = data['ubicacion']
        self.idioma = data['idioma']
        self.comentario = data['comentario']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save_into_db(cls, data ):
        query = """
        INSERT INTO dojos ( nombre , ubicacion , idioma , comentario) 
        VALUES ( %(nombre)s , %(ubicacion)s , %(idioma)s, %(comentario)s);"""
        return connectToMySQL('esquema_encuesta_dojo').query_db( query, data )

    @classmethod
    def get_user(cls, data ):
        query = """ SELECT * FROM dojos WHERE id = %(id)s;"""
        return connectToMySQL('esquema_encuesta_dojo').query_db( query, data )

    @staticmethod
    def validate_user(data):
        is_valid = True 
        if len(data['nombre']) == 0:
            flash("Name can't be left blank.")
            is_valid = False
        if len(data['nombre']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(data['ubicacion']) < 3:
            flash("Location must be a valid one.")          #esta validacion no se toma en cuenta porque recibe informacion de un input tipo select
            is_valid = False
        if len(data['idioma']) < 3:
            flash("Language must be a valid one.")          #esta validacion no se toma en cuenta porque recibe informacion de un input tipo select
            is_valid = False
        if len(data['comentario']) == 0:
            flash("Comments can't be left blank.")
            is_valid = False
        if len(data['comentario']) > 255:
            flash("Comments can't have more than 255 characters.")
            is_valid = False
        return is_valid

