from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import connectToMySQL 
import re	

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

app = Flask(__name__)
app.secret_key = 'The Celtics should have won the 2022 NBA finals'

class Email:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('verificando_email').query_db(query)
        emails = []
        for email in results:
            emails.append( cls(email) )
        return emails
    @classmethod
    def get_one_or_more(cls, data ):
        query = "SELECT * FROM emails WHERE email = %(email)s;"
        return connectToMySQL('verificando_email').query_db( query, data )
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO emails ( email ) VALUES ( %(email)s );"
        return connectToMySQL('verificando_email').query_db( query, data )
    @classmethod
    def delete(cls, data ):
        query = "DELETE FROM emails WHERE email = ( %(email)s );"
        return connectToMySQL('verificando_email').query_db( query, data )

    @staticmethod
    def verify_email(data):
        is_valid = True 
        if len(data['email']) == 0:
            flash("Email can't be left blank!")
            is_valid = False
            return is_valid
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            is_valid = False
            return is_valid
        if (Email.get_one_or_more(data)):
            flash("This email already exists!")
            is_valid = False
            return is_valid
        return is_valid




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process_form():
    data = {
        'email' : request.form['email']
    }
    if not Email.verify_email(request.form):
        return redirect('/')
    Email.save(data)
    return redirect('/success')
@app.route('/delete-<email>')
def delete_email(email):
    data = {
        'email' : email
    }
    Email.delete(data)
    return redirect('/success')

@app.route('/success')
def success():
    emails = Email.get_all()
    return render_template('success.html', emails = emails )


if __name__== "__main__":
    app.run(debug=True)

