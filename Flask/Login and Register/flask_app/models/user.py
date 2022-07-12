from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re	

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.frst_name = data['fname']
        self.last_name = data['lname']
        self.email = data['email']
        self.pw = data['pw']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save_into_db(cls, data ):
        query = """
        INSERT INTO users ( first_name , last_name , email , password) 
        VALUES ( %(fname)s , %(lname)s , %(email)s, %(pw)s);"""
        return connectToMySQL('register_and_login').query_db( query, data )

    @classmethod
    def get_user(cls, data ):
        query = """ SELECT * FROM users WHERE id = %(id)s;"""
        return connectToMySQL('register_and_login').query_db( query, data )

    @classmethod
    def get_by_email(cls, data ):
        query = """ SELECT * FROM users WHERE email = %(email)s;"""
        return connectToMySQL('register_and_login').query_db( query, data )

    @staticmethod
    def validate_user_for_registration(data):
        is_valid = True 
        if len(data['fname']) < 2:
            flash(u"First name must be at least 2 characters.", 'registration_error')
            is_valid = False
        if len(data['lname']) < 2:
            flash(u"Last name must be at least 2 characters.", 'registration_error')
            is_valid = False

        if (User.get_by_email(data)):
            flash("This email already exists!", 'registration_error')
            is_valid = False
        if not EMAIL_REGEX.match(data['email']): 
            flash(u"Invalid email address!", 'registration_error')
            is_valid = False

        if len(data['pw']) < 8:
            flash(u"Password must be at least 8 characters.", 'registration_error')
            is_valid = False
        if not data['pw'] == data['confirm_pw']:
            flash(u"Passwords must match.", 'registration_error')
            is_valid = False
        return is_valid

    @staticmethod
    def validate_user_for_login(data):
        is_valid = True
        if not data['email']:
            flash(u"Email can't be left blank!", 'login_error')
            is_valid = False
            return is_valid
        if not data['pw']:
            flash(u"Password can't be left blank!", 'login_error')
            is_valid = False
            return is_valid
        if not User.get_by_email(data):
            flash(u"Email doesn't exist!", 'login_error')
            is_valid = False
        if not str(data['pw']) == str((User.get_by_email(data))[0]['password']):
            flash(u"Password is incorrect", 'login_error')
            is_valid = False
        return is_valid