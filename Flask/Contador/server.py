from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    print(request.form['name'])
    print(request.form['email'])
    # Nunca renderices una plantilla en una solicitud POST
    # En su lugar, redirigiremos a nuestra ruta de índice
    return redirect('/')

if __name__== "__main__":
    app.run(debug=True)
