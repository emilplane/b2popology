from flask import Blueprint, request, jsonify
import b2sim.engine as b2

ecosim_bp = Blueprint('ecosim', __name__)

@ecosim_bp.route('/', methods=['POST'])
def eco_sim():
    print("GOT TO HERE")
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
            b2.InitFarm(
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

    return jsonify({
        "timeStates": game_state.time_states,
        "cashStates": game_state.cash_states,
        "ecoStates": game_state.eco_states
    })

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
#         {"round": 10, "sendName": 'Grouped Reds'},
#         {"round": 12, "sendName": 'Spaced Rainbows'},
#         {"round": 13, "sendName": 'Zero'},
#         {"round": 14, "sendName": 'Grouped Blacks'}
#     ],
#     "buyQueue": [
#         {"cost": 3850, "message": "Sell Into HRP"},
#         {"cost": 2550, "minBuyRound": 14, "message": "Buy L2G"}
#     ],
#     "startRound": 10,
#     "targetRound": 15 
# }