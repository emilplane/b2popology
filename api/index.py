from flask import Flask, jsonify
from .routes import register_routes

app = Flask(__name__)
register_routes(app)

@app.route("/api/python")
def hello_world():
    return jsonify({"data": "Hello World!"})