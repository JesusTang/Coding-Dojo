from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def chekerboard():
    return render_template('index.html', x = 8, y = 8, color1 = 'red',color2 = 'blue')

@app.route('/<int:x>')
def checkerboard_x(x):
    return render_template('index.html', x = x, y = x, color1 = 'red',color2 = 'blue')

@app.route('/<int:x>/<int:y>')
def checkerboard_x_y(x,y):
    return render_template('index.html', x = x, y = y, color1 = 'red',color2 = 'blue')

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def checkerboard_x_y_colors(x,y,color1,color2):
    return render_template('index.html', x = x, y = y, color1 = color1,color2 = color2)




if __name__=="__main__":
    app.run(debug=True)

