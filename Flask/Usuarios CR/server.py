from flask import Flask, render_template, redirect, request
from user import User

app = Flask(__name__)


@app.route("/users")
def show_users():
    users = User.get_all()
    print(users)
    return render_template("users.html", users=users)


@app.route('/users/new')
def user():
    return render_template('new_user.html')


@app.route('/adding-new-user', methods=["POST"])
def create_user():

    data = {
    "fname": request.form["fname"],
    "lname" : request.form["lname"],
    "email" : request.form["email"]
    }
    User.save_into_db(data)
    return redirect('/users')




@app.route('/users/<user_id>')
def show_user_x(user_id):
    data = {
        "id": user_id
    } 
    user = User.get_one_specific(data)
    print(user)
    return render_template('user_x.html', user=user)



@app.route('/users/<user_id>/edit')
def edit_user(user_id):
    data = {
        "id": user_id,
    }
    user = User.get_one_specific(data)
    print(user)
    return render_template('user_x_edit.html', user=user)

@app.route('/editing-user-<user_id>', methods=['POST'])
def editing_user(user_id):
    data = {
        "id": user_id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    } 
    User.edit_on_db(data)
    user = User.get_one_specific(data)
    print(user)
    print(data)
    return redirect(f'/users/{user_id}')


@app.route('/deleting-user-<user_id>')
def delete_user(user_id):
    data = {
        "id": user_id
    } 
    User.delete_from_db(data)
    return redirect('/users')


if __name__ == "__main__":
    app.run(debug=True)
