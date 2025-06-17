from flask import request, jsonify
import b2sim.engine as b2
from api.utils.auth import token_required
from api.models.models import Simulation

# For RESTful routes related to the operation of the eco simulator.
prefix = '/api/ecosim/'

def register_ecosim_routes(app):
    # For now, I will not require authentication for this specific route.
    @app.route(prefix, methods=['POST'])
    def eco_sim():
        """POST method to run an eco simulation"""
        data = request.get_json()

        farms = []
        eco_queue = []
        buy_queue = []

        # Define round lengths
        rounds = b2.Rounds(data.get('stallFactor'))

        # Initialize the farms
        farm_info = data.get('farms')
        if farm_info: 
            farms = [
                b2.initFarm(
                    rounds.getTimeFromRound(f['round']), 
                    upgrades = f['upgrades']
                ) 
                for f in farm_info
            ]

        # Build the eco queue
        eco_queue_info = data.get('ecoQueue')
        if eco_queue_info:
            eco_queue = [
                b2.ecoSend(
                    time=rounds.getTimeFromRound(e['round']), 
                    send_name=e['sendName']
                ) 
                for e in eco_queue_info
            ]

        # Build the buy queue 
        buy_queue_info = data.get('buyQueue')
        if buy_queue_info:
            buy_queue = [[
                b2.buyDefense(
                    b['cost'],
                    min_buy_time=rounds.getTimeFromRound(b.get('minBuyRound')) if b.get('minBuyRound') is not None else None,
                    message=b['message']
                )
                ] for b in buy_queue_info
            ]


        # Form the initial game state
        initial_state_game = {
            'Cash': data.get('cash'),
            'Eco': data.get('eco'),
            'Rounds': rounds,
            'Game Round': data.get('startRound'),
            'Buy Queue': buy_queue,
            'Eco Queue': eco_queue,
            'Farms': farms
        }

        # Run the simulation 
        game_state = b2.GameState(initial_state_game)
        game_state.fastForward(target_round = 15)

        return_obj = {
            "timeStates": game_state.time_states,
            "cashStates": game_state.cash_states,
            "ecoStates": game_state.eco_states
        }

        print("Eco sim successful! ")
        # print(return_obj['timeStates'])
        # print(return_obj['cashStates'])
        # print(return_obj['ecoStates'])
        
        return jsonify(return_obj)

    @app.route(prefix + 'get', methods=['GET'])
    @token_required
    def get_simulations():
        """ GET method to retrieve all simulations """
        try:
            simulations = Simulation.objects.all()
            return jsonify(simulations), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route(prefix + 'me', methods=['GET'])
    @token_required
    def get_my_simulations():
        """ GET method to retrieve all simulations for the current user """
        user_id = request.user_id
        try:
            simulations = Simulation.objects(author=user_id)
            sim_list = [sim.to_mongo().to_dict() for sim in simulations]

            # We don't need to worry about the ObjectId fields
            # Actually, if we try to include them, we get JSON serialization errors
            for sim in sim_list:
                del sim['_id']
                del sim['author']

            print(sim_list)
            return jsonify(sim_list), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    
    @app.route(prefix + 'post', methods=['POST'])
    @token_required
    def post_simulation():
        """ POST method to create a new simulation """
        data = request.get_json()
        try:
            simulation = Simulation(**data)
            simulation.author = request.user_id  # Set the author to the current user
            simulation.save()
            return jsonify({"message": "Simulation created", "id": str(simulation.id)}), 201
        except ValidationError as ve:
            return jsonify({"error": ve.message}), 400
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route(prefix + 'delete', methods=['DELETE'])
    @token_required
    def delete_simulation():
        """ DELETE method to remove a simulation """
        # This method allows simulations to be deleted only by their author
        data = request.get_json()
        try:
            simulation = Simulation.objects.get(id=data['id'], author=request.user_id)
            simulation.delete()
            return jsonify({"message": "Simulation deleted"}), 200
        except Simulation.DoesNotExist:
            return jsonify({"error": "Simulation not found"}), 404
        except Exception as e:
            return jsonify({"error": str(e)}), 500


# A sample JSON object that gets sent might look something like...
# {
#     "stallFactor": 0.1,
#     "cash": 0,
#     "eco": 800,
#     "farms": [
#         {"round": 7, "upgrades": [3,2,0]},
#         {"round": 13.9, "upgrades": [3,2,0]},
#     ],
#     "ecoQueue": [
#         {"round": 10, "sendName": "Grouped Reds"},
#         {"round": 12, "sendName": "Spaced Rainbows"},
#         {"round": 13, "sendName": "Zero"},
#         {"round": 14, "sendName": "Grouped Blacks"}
#     ],
#     "buyQueue": [
#         {"cost": 3850, "message": "Sell Into HRP"},
#         {"cost": 2550, "minBuyRound": 14, "message": "Buy L2G"}
#     ],
#     "startRound": 10,
#     "targetRound": 15 
# }