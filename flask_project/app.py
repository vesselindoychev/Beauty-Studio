from flask import Flask, render_template
from flask_bootstrap import Bootstrap5
import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

app = Flask(__name__)
SECRET_KEY = os.environ['SECRET_KEY']
app.config['SECRET_KEY'] = SECRET_KEY
bootstrap5 = Bootstrap5(app)


@app.route('/')
def home():  # put application's code here
    return render_template('home.html')


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/services')
def services():
    return render_template('services.html')


@app.route('/products')
def products():
    return render_template('products.html')


@app.route('/clients')
def clients():
    return render_template('clients.html')


@app.route('/pricing')
def pricing():
    return render_template('pricing.html')


if __name__ == '__main__':
    app.run(debug=True)
