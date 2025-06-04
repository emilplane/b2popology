from .ecosim import register_ecosim_routes
from .test import register_test_routes
from .popology import register_popology_routes
from .user import register_user_routes

# Run register_routes in index.py to access all routes defined in the routes folder.
# Just make sure they're all included here first!

def register_routes(app):
    register_ecosim_routes(app)
    register_test_routes(app)
    register_popology_routes(app)
    register_user_routes(app)
