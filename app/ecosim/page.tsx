'use client';
import {useEffect, useState} from 'react';

export default function EcoSimPage() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/test', {})
            .then((res) => res.json())
            .then((json) => setData(json.data));
        console.log("fetching data");
        console.log(`data: ${data}`);
        }, []);

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