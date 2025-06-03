from flask import request, jsonify
from mongoengine import ValidationError

from models.models import User

# For routes related to user login/registration
def register_user_routes(app):
    @app.route("/api/user/register", methods=["POST"])
    def create_user():
        data = request.get_json()
        try:
            user = User(**data)
            user.save()
            return jsonify({"message": "User created", "id": str(user.id)}), 201
        except ValidationError as ve:
            return jsonify({"error": ve.message}), 400
        except Exception as e:
            return jsonify({"error": str(e)}), 500