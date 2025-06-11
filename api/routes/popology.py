from api.popology.popology import Tower
from flask import jsonify, request
from api.popology.popology import PopologyTower
from api.popology.definitions import TowerDataFormats
import json

# For RESTful routes related to base popology operations.

def register_popology_routes(app):
    @app.route("/api/python")
    def hello_world():
        print("Serving /api/python")
        return jsonify({"data": "Hello World!"})
    
    @app.route("/api/popology/tower_info/<string:tower_name>")
    def get_tower_stats(tower_name):
        with open(f"statsData/blueprints/{tower_name}.json") as file:
            data = json.load(file)

        tower = PopologyTower(data)
        tower_info = tower.get_tower_info()
        return jsonify(tower_info)

    @app.route("/api/popology/tower_stats/<string:tower_name>")
    def get_tower_data(tower_name):
        with open(f"statsData/blueprints/{tower_name}.json") as file:
            data = json.load(file)

        path1 = request.args.get('path1')
        path2 = request.args.get('path2')
        path3 = request.args.get('path3')

        tower = PopologyTower(data)
        tower_stats = tower.get_tower([0, 0, 0])
        return jsonify(tower_stats)