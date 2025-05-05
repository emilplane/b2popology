from flask import Flask, jsonify
from .routes import register_routes
from .popology.popology import Tower
import json

app = Flask(__name__)
register_routes(app)

@app.route("/api/python")
def hello_world():
    print("Serving /api/python")
    return jsonify({"data": "Hello World!"})

@app.route("/api/popology/tower_info/<string:tower_name>")
def get_tower(tower_name):
    with open(f"statsData/{tower_name}.json") as file:
        data = json.load(file)

    tower = Tower(data)
    tower_info = tower.get_tower_info()
    return jsonify(tower_info)