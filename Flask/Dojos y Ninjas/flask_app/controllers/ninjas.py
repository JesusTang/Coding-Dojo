from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.ninja import Ninja 
from flask_app.models.dojo import Dojo

@app.route("/ninjas")
def show_ninjas():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("ninjas.html", dojos=dojos)

@app.route("/dojos")
def show_dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("dojos.html", dojos=dojos)

@app.route("/add-new-dojo", methods=["POST"])
def addDojo():
    data = {
        'name': request.form['name']
    }
    Dojo.save_into_db(data)
    return redirect("/dojos")

@app.route("/add-new-ninja", methods=['POST'])
def addNinja():
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'age': request.form['age'],
        'dojo_id': request.form['dojoid'],
    }
    x = data['dojo_id']

    Ninja.save_into_db(data)
    return redirect(f"/dojos/{x}")
    return 'hello'

@app.route("/dojos/<int:dojo_id>")
def showNinjasInDojo(dojo_id):
    data = {
        'dojo_id': dojo_id
    }
    dojos = Dojo.get_dojo_with_ninjas(data)
    if dojos == False:
        return 'No ninjas in this dojo'
    return render_template("/dojo_x.html", dojos=dojos)

# @app.route('/ninjas/new')
# def ninja():
#     return render_template('new_ninja.html')

# @app.route('/adding-new-ninja', methods=["POST"])
# def create_ninja():
#     data = {
#     "fname": request.form["fname"],
#     "lname" : request.form["lname"],
#     "email" : request.form["email"]
#     }
#     ninja.save_into_db(data)
#     return redirect('/ninjas')

# @app.route('/ninjas/<ninja_id>')
# def show_ninja_x(ninja_id):
#     data = {
#         "id": ninja_id
#     } 
#     ninja = ninja.get_one_specific(data)
#     print(ninja)
#     return render_template('ninja_x.html', ninja=ninja)

# @app.route('/ninjas/<ninja_id>/edit')
# def edit_ninja(ninja_id):
#     data = {
#         "id": ninja_id,
#     }
#     ninja = ninja.get_one_specific(data)
#     print(ninja)
#     return render_template('ninja_x_edit.html', ninja=ninja)

# @app.route('/editing-ninja-<ninja_id>', methods=['POST'])
# def editing_ninja(ninja_id):
#     data = {
#         "id": ninja_id,
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "email" : request.form["email"]
#     } 
#     ninja.edit_on_db(data)
#     ninja = ninja.get_one_specific(data)
#     print(ninja)
#     print(data)
#     return redirect(f'/ninjas/{ninja_id}')

# @app.route('/deleting-ninja-<ninja_id>')
# def delete_ninja(ninja_id):
#     data = {
#         "id": ninja_id
#     } 
#     ninja.delete_from_db(data)
#     return redirect('/ninjas')