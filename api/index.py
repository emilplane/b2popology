from flask import Flask
from .routes import register_routes

app = Flask(__name__)
register_routes(app)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"