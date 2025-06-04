from mongoengine import connect, disconnect
from api.models.models import User, Simulation

def seed_db():
    print("Connecting to MongoDB...")
    connect('b2popology', host='mongodb://localhost:27017/b2popology')

    # Optional: clear old test data
    print("Clearing existing data...")
    User.drop_collection()
    Simulation.drop_collection()

    print("Seeding test users...")
    user1 = User(username="fartballs21", email="fartballs@popology.dev", password="password1").save()
    user2 = User(username="rugrat", email="rugrat@popology.dev", password="password2").save()

    print("Seeding simulations...")
    sim1 = Simulation(
        name="First Sim",
        author=user1,
        rounds=0.75,
        cash=1000,
        eco=900,
        eco_send="Grouped Yellows",
        farms=[
            {"round": 13.9, "upgrades": [3, 2, 0]},
            {"round": 12.5, "upgrades": [2, 0, 0]},
        ],
        start_round=14.0,
        end_round=17.0
    ).save()

    user1.simulations.append(sim1)
    user1.save()

    print("Database seeded successfully.")
    disconnect()

if __name__ == "__main__":
    seed_db()
