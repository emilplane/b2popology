'use client';
import {useEffect, useState} from 'react';
import CashOverTimeChart from '../../components/ecosim/SimChart'
import SimForm from '../../components/ecosim/SimForm'

// Interface which concerns the results of an eco simulation
interface EcoSimData {
    timeStates: number[];
    ecoStates: number[];
    cashStates: number[];
};

// Interface which concerns the input data of an eco simulation
interface SimOptions {
    stallFactor: number;
    cash: number;
    eco: number;
    startRound: number;
    targetRound: number;
    ecoSend: string;
}

export default function EcoSimPage() {
    const [data, setData] = useState<EcoSimData>({
        timeStates: [],
        ecoStates: [],
        cashStates: []
    });

    const ecosimParams = {
        "stallFactor": 0.1,
        "cash": 0,
        "eco": 800,
        "farms": [
            {"round": 7, "upgrades": [3,2,0]},
            {"round": 13.9, "upgrades": [3,2,0]},
        ],
        "ecoQueue": [
            {"round": 10, "sendName": "Grouped Reds"},
            {"round": 12, "sendName": "Spaced Rainbows"},
            {"round": 13, "sendName": "Zero"},
            {"round": 14, "sendName": "Grouped Blacks"}
        ],
        "buyQueue": [
            {"cost": 3850, "message": "Sell Into HRP"},
            {"cost": 2550, "minBuyRound": 14, "message": "Buy L2G"}
        ],
        "startRound": 10,
        "targetRound": 15 
    };

    useEffect(() => {

        const fetchSim = async () => {
            try {
                const res = await fetch('/api/ecosim', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(ecosimParams)
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                setData(json);
            }   catch(err) {
                console.error("Error fetching simulation data:", err);
            }
        }

        fetchSim();
    
    }, []);

    useEffect(() => {
        if (data) {
            console.log("Data updated to:", JSON.stringify(data, null, 2));
            console.log(data.timeStates);
            console.log(data.ecoStates);
        }
    }, [data]);

    // When the eco sim form is submitted, run a simulation 
    const onSubmit = async (form: SimOptions) => {
            try {
                const submitData = {
                    ...ecosimParams,
                    stallFactor: form.stallFactor,
                    cash: form.cash,
                    eco: form.eco,
                    startRound: form.startRound,
                    targetRound: form.targetRound,
                    ecoQueue: [
                        {round: 0, sendName: form.ecoSend}
                    ]
                }
                const res = await fetch('/api/ecosim', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(submitData)
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                setData(json);
            }   catch(err) {
                console.error("Error fetching simulation data:", err);
            }
    }

    return (
        <div className="w-full min-h-screen p-3 border border-black">
            <div className='grid grid-cols-4 gap-2 border-black'>
            {/* Contains the two elements needed for our simulator*/}

                <div className="b2-component col-span-3 p-3">
                {/* Contains a graph that displays simulation results */}
                    <h2>Simulation Results</h2>
                    <div className="bg-white " style={{ position: 'relative', width: '100%', height: '500px' }}>
                        <CashOverTimeChart timeStates={data.timeStates} cashStates={data.cashStates} />
                    </div>
                    
                </div>

                <div className="b2-component col-span-1 p-3">
                {/* Contains UI that allows users to configure simulation options */}
                    <h2>Options</h2>
                    <div>
                        <SimForm onSubmit={onSubmit} />
                    </div>
                </div>

            </div>
        </div>
    );
};

// fetch('/api/ecosim', {
//     method: 'POST',
//     body: JSON.stringify({
//         "stallFactor": 0.1,
//         "cash": 0,
//         "eco": 800,
//         "farms": [
//             {"round": 7, "upgrades": [3,2,0]},
//             {"round": 13.9, "upgrades": [3,2,0]},
//         ],
//         "ecoQueue": [
//             {"round": 10, "sendName": "Grouped Reds"},
//             {"round": 12, "sendName": "Spaced Rainbows"},
//             {"round": 13, "sendName": "Zero"},
//             {"round": 14, "sendName": "Grouped Blacks"}
//         ],
//         "buyQueue": [
//             {"cost": 3850, "message": "Sell Into HRP"},
//             {"cost": 2550, "minBuyRound": 14, "message": "Buy L2G"}
//         ],
//         "startRound": 10,
//         "targetRound": 15
//     }),
// })