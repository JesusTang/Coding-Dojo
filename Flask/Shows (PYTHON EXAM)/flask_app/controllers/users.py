from flask_app import app
from flask import render_template,redirect,request, flash, session
from flask_bcrypt import Bcrypt
from flask_app.models.show import Show 
from flask_app.models.user import User
bcrypt = Bcrypt(app)

@app.route("/")
def log_and_reg():
    return render_template("register_and_login.html")

@app.route("/process-register", methods=['POST'])
def process_register():
    if not User.validate_user_for_registration(request.form):
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    confirm_pw_hash = bcrypt.generate_password_hash(request.form['confirm_password'])
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': pw_hash,
        'confirm_password': confirm_pw_hash
    }
    id = User.save_into_db(data)
    print(id)
    data = {
        'id': id
    }
    user = User.get_by_id(data)
    print(user)
    session['id'] = user[0].id
    session['first_name'] = user[0].first_name
    session['last_name'] = user[0].last_name
    return redirect("/shows")

@app.route("/process-login", methods=['POST'])
def process_login():
    data = {
        'email': request.form['email'],
        'password': request.form['password']
    }
    user_in_db = User.get_by_email(data)
    if not User.validate_user_for_login(data):
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db[0].password, request.form['password']):
        flash(u"Invalid password", 'login_error')
        return redirect('/')
    user = User.get_by_email(data)
    print(user)
    session['id'] = user[0].id
    session['first_name'] = user[0].first_name
    session['last_name'] = user[0].last_name
    return redirect('/shows')

@app.route("/shows")
def show_all_shows():
    shows = Show.get_shows_with_users()
    if not session:
        flash(u"There's no user logged in!", "general_error")
        return redirect('/')
    return render_template('shows_of_everyone.html', shows = shows)

@app.route("/shows/new")
def add_new_show():
    if not session:
        flash(u"There's no user logged in!", "general_error")
        return redirect('/')
    return render_template('add_show.html')

@app.route('/process-new-show', methods=['POST'])
def process_new_show():
    data = {
        'title': request.form['title'],
        'description': request.form['description'],
        'network': request.form['network'],
        'release_date': request.form['release_date'],
        'user_id': session['id']
    }
    print('YOU SHOULD BE LOOKING AT THIS')
    print(request.form)
    print(data)
    if not Show.validate_show(data):
        return redirect('/shows/new')
    Show.save_into_db(data)
    return redirect('/shows')

@app.route('/process-logout')
def process_logout():
    session.clear()
    return redirect('/')

@app.route('/shows/<show_id>')
def show_one_show(show_id):
    if not session:
        flash(u"There's no user logged in!", "general_error")
        return redirect('/')
    data = {
        'id': show_id
    }
    show = Show.get_show_with_users_by_id(data)
    return render_template('show_description.html', show = show[0])

@app.route('/shows/edit/<int:show_id>')
def edit_show(show_id):
    if not session:
        flash(u"There's no user logged in!", "general_error")
        return redirect('/')
    data = {
        'id': show_id
    }
    show = Show.get_show_with_users_by_id(data)
    if show[0]['user_id'] != session['id']:
        return redirect('/shows')
    return render_template('edit_show.html', show = show[0])

@app.route('/process-edit-show-<show_id>', methods=['POST'])
def process_edit_show(show_id):
    id = show_id
    data = {
        'id' : show_id,
        'title': request.form['title'],
        'description': request.form['description'],
        'network': request.form['network'],
        'release_date': request.form['release_date'],
    }
    if not Show.validate_show(data):
        return redirect(f'/shows/edit/{id}')
    Show.update_show(data)
    return redirect('/shows')

@app.route('/delete-show-<int:show_id>')
def processing_delete_show(show_id):
    data = {
        'id': show_id
    }
    show = Show.get_show_with_users_by_id(data)
    if show[0]['user_id'] != session['id']:
        return redirect('/shows')
    Show.delete_show(data)
    return redirect('/shows')
