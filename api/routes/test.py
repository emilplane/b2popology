def register_test_routes(app):
    @app.route('/api/test')
    def status():
        return {"message": "This is the test route"}