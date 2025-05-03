from flask import Blueprint 

test_bp = Blueprint('test', __name__)

@test_bp.route('/')
def status():
    return {"message": "This is the test route"}