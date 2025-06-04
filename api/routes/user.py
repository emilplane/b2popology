from flask import request, jsonify
from mongoengine import ValidationError

from api.models.models import User
import api.utils.auth as auth

prefix = '/api/user/'

# For routes related to user login/registration
def register_user_routes(app):
    @app.route(prefix, methods=["GET"])
    def get_all_users():
        try:
            users = User.objects.all()
            user_list = [{"id": str(user.id), "username": user.username, "email": user.email} for user in users]
            return jsonify(user_list), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        
    @app.route(prefix + 'register', methods=["POST"])
    def create_user():
        """ POST method to create a new user """
        data = request.get_json()
        try:
            user = User(**data)
            user.save()
            return jsonify({"message": "User created", "id": str(user.id)}), 201
        except ValidationError as ve:
            return jsonify({"error": ve.message}), 400
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    
    @app.route(prefix + 'login', methods=["POST"])
    def login_user():
        """ POST method to log in a user"""
        data = request.get_json()
        try:
            user = User.objects.get(email=data["email"])
            if user.check_password(data["password"]):
                # Generate a token for the user
                return jsonify({"message": "Login successful", "id": str(user.id), "token": auth.generate_token(user.id)}), 200
            else:
                return jsonify({"error": "Invalid credentials"}), 401
        except User.DoesNotExist:
            return jsonify({"error": "User not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500