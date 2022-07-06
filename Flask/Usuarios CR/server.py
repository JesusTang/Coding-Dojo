from flask import Flask, render_template, redirect, request
from user import User

app = Flask(__name__)


@app.route("/users")
def index():
    users = User.get_all()
    print(users)
    return render_template("users.html", users=users)


@app.route('/users/new')
def user():
    return render_template('new_user.html')


@app.route('/add-new-user', methods=["POST"])
def create_user():

    data = {
    "fname": request.form["fname"],
    "lname" : request.form["lname"],
    "email" : request.form["email"]
    }
    User.save_into_db(data)
    return redirect('/users')


if __name__ == "__main__":
    app.run(debug=True)

