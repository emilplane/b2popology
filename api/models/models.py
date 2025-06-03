from mongoengine import Document, EmbeddedDocument, signals
from mongoengine import fields as f
import bcrypt

# --- Embedded Document Definitions ---

class Farm(EmbeddedDocument):
    round = f.FloatField(required=True, min_value=0, default=0)
    upgrades = f.ListField(f.IntField(min_value=0, max_value=4), required=True, default=[0, 0, 0])

# --- Model Definitions ---

class Simulation(Document):
    name = f.StringField(required=True, max_length=50)
    author = f.ReferenceField("User")

    # For now, my goal is to bring *something* to the frontend as soon as possible
    # I will only focus hence on implementing basic simulation parameters
    rounds = f.FloatField(required=True, min_value=0, max_value=1)  # Number of rounds in the simulation
    cash = f.FloatField(required=True, min_value=0) # Starting cash in the simulation
    eco = f.FloatField(required=True, min_value=0)  # Starting eco in the simulation
    eco_send = f.StringField(required=True, max_length=50)  # Name of the eco send
    farms = f.ListField(f.EmbeddedDocumentField("Farm"))  # List of farms in the simulation
    
    start_round = f.FloatField(required=True, min_value=0)
    end_round = f.FloatField(required=True, min_value=0)
    
class User(Document):
    username = f.StringField(required=True, max_length=50)
    email = f.EmailField(required=True, unique=True)
    password = f.StringField(required=True, min_length=8)
    simulations = f.ListField(f.ReferenceField("Simulation"))

    def check_password(self, raw_password):
        """Check if the provided password matches the stored hashed password."""
        return bcrypt.checkpw(raw_password.encode('utf-8'), self.password.encode('utf-8'))

# --- Signal Handlers ---

@signals.pre_save.connect(User)
def hash_password(sender, document, **kwargs):
    """Hash the password before saving the user."""
    if document.password:
        hashed = bcrypt.hashpw(
            document.password.encode('utf-8'), 
            bcrypt.gensalt())
        document.password = hashed.decode('utf-8')