from .ecosim import ecosim_bp
from .test import test_bp

def register_routes(app):
    app.register_blueprint(ecosim_bp, url_prefix='/api/ecosim')
    app.register_blueprint(test_bp,url_prefix='/api/test')