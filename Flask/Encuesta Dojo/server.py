from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'The Celtics should have won the 2022 NBA finals'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process_form():
    session['name'] = str(request.form['name'])
    session['dojo_location'] =str(request.form['dojo_location'])
    session['favourite_language'] = str(request.form['favourite_language'])
    session['comments'] = str(request.form['comments'])
    print(request.form)
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html', name=session['name'], location=session['dojo_location'], language=session['favourite_language'], comments=session['comments'])


if __name__== "__main__":
    app.run(debug=True)

