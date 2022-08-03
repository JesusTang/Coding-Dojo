from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

NAME_REGEX = re.compile(r'^[a-zA-Z]') 

class Show:
    def __init__( self , data ):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.description = data['description']
        self.release_date = data['release_date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_shows_with_users( cls ):
        query = """
        SELECT * FROM shows 
        JOIN users ON shows.user_id = users.id;"""
        results_dict = connectToMySQL('shows').query_db( query )
        return results_dict

    @classmethod
    def save_into_db(cls, data ):
        query = """
        INSERT INTO shows ( title , network , description , release_date , user_id ) 
        VALUES ( %(title)s , %(network)s , %(description)s , %(release_date)s , %(user_id)s );"""
        result_id = connectToMySQL('shows').query_db( query, data )
        return result_id

    @classmethod
    def delete_show(cls, data ):
        query = """
        DELETE FROM shows WHERE id = %(id)s;"""
        result_is_none = connectToMySQL('shows').query_db( query, data )
        return result_is_none

    @classmethod
    def update_show(cls, data ):
        query = """
        UPDATE shows
        SET title = %(title)s, network = %(network)s, description =  %(description)s, release_date =  %(release_date)s, updated_at = NOW()
        WHERE id = %(id)s;"""
        result_is_none = connectToMySQL('shows').query_db( query, data )
        return result_is_none

    @classmethod
    def get_show_with_users_by_id(cls, data ):
        query = """
        SELECT * FROM shows JOIN users ON shows.user_id = users.id WHERE shows.id = %(id)s;"""
        result_dict = connectToMySQL('shows').query_db( query, data )
        return result_dict


    @staticmethod
    def validate_show(data):
        is_valid = True 
        if len(data['title']) < 3:
            flash(u"Show title must be at least 3 characters!", 'show_error')
            is_valid = False
        if len(data['network']) < 3:
            flash(u"Network must be at least 3 characters.", 'show_error')
            is_valid = False
        if len(data['description']) < 3:
            flash(u"Description can't be longer than 255 characters!", 'show_error')
            is_valid = False
        if not data['release_date']:
            flash(u"Date can't be left blank!", 'show_error')
            is_valid = False
        if len(data['title']) > 255:
            flash(u"Show title can't be longer than 255 characters!", 'show_error')
            is_valid = False
        if len(data['network']) > 255:
            flash(u"Network can't be longer than 255 characters.", 'show_error')
            is_valid = False
        if len(data['description']) > 255:
            flash(u"Description can't be longer than 255 characters.", 'show_error')
            is_valid = False
            return is_valid

        return is_valid
