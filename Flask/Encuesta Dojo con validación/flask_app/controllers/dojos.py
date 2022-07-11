from flask_app import app
from flask import render_template,redirect,request,session
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process_form():
    data = {
        'nombre' : request.form['nombre'],
        'ubicacion' : request.form['ubicacion'],
        'idioma' : request.form['idioma'],
        'comentario' : request.form['comentario']
    }
    if not Dojo.validate_user(request.form):
        return redirect('/')
    session['id'] = Dojo.save_into_db(data)
    return redirect('/result')

@app.route('/result')
def result():
    data = {
        'id': session['id']
    }
    new_dojo = Dojo.get_user(data)
    return render_template('result.html', dojo = new_dojo[0])
