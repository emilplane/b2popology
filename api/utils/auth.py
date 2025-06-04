import jwt
from flask import request, jsonify
from functools import wraps
from datetime import datetime, timedelta, timezone

from dotenv import load_dotenv
import os

from api.utils.config import Config

load_dotenv()
JWT_SECRET_KEY = Config.JWT_SECRET_KEY

def generate_token(user_id, expires_in=2):
    payload = {
        "user_id": str(user_id),
        "exp": datetime.now(timezone.utc) + timedelta(hours=expires_in)
    }
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm="HS256")

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")
        print(token)
        if not token:
            return jsonify({"message": "Token is missing!"}), 401
        
        if not token.startswith("Bearer "):
            return jsonify({"message": "Invalid token format!"}), 401
        
        token = token.split(" ")[1]
        
        try:
            data = jwt.decode(token, JWT_SECRET_KEY, algorithms=["HS256"])
            request.user_id = data["user_id"]
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token has expired!"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Invalid token!"}), 401
        
        return f(*args, **kwargs)
    
    return decorated