from flask import Flask

app = Flask(__name__)


@app.route('/')
def hola_mundo():
    return 'Hola Mundo!'

@app.route('/dojo')
def say_dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def salute_name(name):
    return f'Hola, {name}!'

@app.route('/repeat/<times>/<this>')
def repeat_this_times(times, this):
    return int(times)*str(this)


if __name__=="__main__":
    app.run(debug=True)

