from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'Maduro mamaguebaso'

@app.route('/')
def index():
    session['visits'] += 1
    return render_template("index.html", counter=session['visits'])

@app.route('/destroy_session')
def index_cleared():
    session.clear()
    session['visits'] = 0
    return redirect('/')

@app.route('/increment_by_2')
def index_by_2():
    session['visits'] += 1
    return redirect('/')

@app.route('/increment_by_x_many', methods=["POST"])
def index_by_x():
    x = int(request.form['x_many'])
    session['visits'] += (x-1)
    return redirect('/')

if __name__== "__main__":
    app.run(debug=True)


