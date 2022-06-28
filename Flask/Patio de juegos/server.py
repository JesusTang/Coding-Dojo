from flask import Flask, render_template

app = Flask(__name__)


@app.route('/play')
def create_world():
    return render_template('index.html', x = 3, color = "aqua")

@app.route('/play/<x>')
def create_world_x(x):
    return render_template('index.html', x = int(x), color = "aqua")

@app.route('/play/<x>/<color>')
def create_world_x_color(x, color):
    return render_template('index.html', x = int(x), color = str(color))


if __name__=="__main__":
    app.run(debug=True)

