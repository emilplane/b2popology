'use client';
import {useEffect, useState} from 'react';

export default function EcoSimPage() {
    const [data, setData] = useState('');

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

    return (
        <div className="w-screen min-h-screen p-3 border border-black">
            <div className='grid grid-cols-2 gap-2 border-black'>
            {/* Contains the two elements needed for our simulator*/}

                <div className="b2-component">
                {/* Contains a graph that displays simulation results */}
                    <p>Foo</p>
                </div>

                <div className="text-white bg-green-600 border border-black">
                {/* Contains UI that allows users to configure simulation options */}
                    <p>Foo</p>
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