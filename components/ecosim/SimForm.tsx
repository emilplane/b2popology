// Form component for the ecosim page

import { useState } from "react";

import {
    SimOptions
} from "../exports";

// Our SimForm component at any time will display one of these two subcomponents
// Whichever subcomponent is active determines which attributes of the simulation can be modified at a given point
import BaseSubform from "./subforms/BaseSubform";
import FarmSubform from "./subforms/FarmSubform";

export default function SimForm({ onSubmit }: any) {

    // We will not display all form parameters on one page
    // formMode 0 is for base options, like starting cash, eco, round, etc.
    // formMode 1 is for configuring starting farms
    const [formMode, setFormMode] = useState<number>(0);

    // Concerns all options that can be set for a simulation
    const [form, setForm] = useState<SimOptions>({
        stallFactor: 0.1,
        cash: 0,
        eco: 800,
        startRound: 13,
        targetRound: 15,
        ecoSend: "Grouped Yellows",
        farms: [],

        // For now, our code lacks the ability to influence these parameters
        ecoQueue: [],
        buyQueue: []
    });

    // Pass to the onSubmit from the parent (ecosim)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded max-w-md mx-auto">

            {/* Toggle between subforms */}
            <div className="flex justify-center space-x-4 mb-4">
                <button
                    type="button"
                    className={`px-4 py-2 rounded ${formMode === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setFormMode(0)}
                >
                    Base Setup
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded ${formMode === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setFormMode(1)}
                >
                    Farm Setup
                </button>
            </div>

            {/* Display subform */}
            {formMode === 0 ? 
            <BaseSubform form={form} setForm={setForm}/> : 
            <FarmSubform form={form} setForm={setForm}/>}

            {/* Simulate button */}
            <button type="submit" className="bg-green-800 text-white py-2 px-4 rounded hover:bg-black">
                Simulate
            </button>
        </form>
    )
}