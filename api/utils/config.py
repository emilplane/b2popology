import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "fartballs21")
    MONGODB_URI = os.getenv("MONGODB_URI", "error")