# Importing the basics
from flask import Flask
from mongoengine import connect 

# Import routes
from api.routes import register_routes

# Import models
import api.models.models as m

def create_app():
    # Create the Flask app
    app = Flask(__name__)

    # Connect to the MongoDB database
    connect('b2popology', host='mongodb://localhost:27017/b2popology')

    # Register routes
    register_routes(app)

    return app

if __name__ == '__main__':
    # If this script is run directly, create the app and run it
    app = create_app()
    app.run(debug=True)

