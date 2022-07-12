from flask_app import app
from flask import render_template,redirect,request,session, flash
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process-register', methods=["POST"])
def register_user():
    data = {
        'fname' : request.form['fname'],
        'lname' : request.form['lname'],
        'email' : request.form['email'],
        'pw' : request.form['pw'],
    }
    if not User.validate_user_for_registration(request.form):
        return redirect('/')
    session['id'] = User.save_into_db(data)
    return redirect('/dashboard')

@app.route('/process-login', methods=["POST"])
def login_user():
    data = {
        'email' : request.form['email'],
        'pw' : request.form['pw'],
    }
    if not User.validate_user_for_login(data):
        return redirect('/')
    session['id'] = (User.get_by_email(request.form))[0]['id']
    return redirect('/dashboard')

@app.route('/dashboard')
def show_dashboard():
    if not 'id' in session:
        flash(u"There's no user logged in",'general_error')
        return redirect('/')
    data = {
        'id': session['id']
    }
    new_dojo = User.get_user(data)
    return render_template('dashboard.html', user = new_dojo)

@app.route('/logout')
def go_to_home():
    session.clear()
    return redirect('/')

