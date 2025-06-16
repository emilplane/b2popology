// Form component for the ecosim page

import { useState } from "react";

interface SimOptions {
    stallFactor: number;
    cash: number;
    eco: number;
    startRound: number;
    targetRound: number;
    ecoSend: string;
}

export default function SimForm({ onSubmit }: any) {

    // List of eco sends available for use in the simulator
    const ecoSends = [
        "Zero",
        "Grouped Reds",
        "Spaced Blues",
        "Grouped Blues",
        "Spaced Greens",
        "Grouped Greens",
        "Spaced Yellows",
        "Grouped Yellows",
        "Spaced Pinks",
        "Grouped Pinks",
        "Spaced Whites",
        "Grouped Whites",
        "Spaced Blacks",
        "Grouped Blacks",
        "Spaced Purples",
        "Grouped Purples",
        "Spaced Zebras",
        "Grouped Zebras",
        "Spaced Leads",
        "Grouped Leads",
        "Tight Leads",
        "Spaced Rainbows",
        "Grouped Rainbows",
        "Spaced Ceramics",
        "Grouped Ceramics",
        "Tight Ceramics"
    ];

    const [form, setForm] = useState<SimOptions>({
        stallFactor: 0.1,
        cash: 0,
        eco: 800,
        startRound: 13,
        targetRound: 15,
        ecoSend: "Grouped Yellows"
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));

        // The start round must not exceed the target round
        if (form.startRound > form.targetRound) {
            setForm((prev) => ({
            ...prev,
            targetRound: form.startRound,
            }));
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here, we will use the onSubmit defined in the ecosim page
        onSubmit(form);
    };

    // Concerns how input boxes are stylized
    const inputClass = "bg-white text-black mt-1 block w-full border border-black rounded p-2";
    
    // Concerns how the *labels* for input boxes are stylized
    const inputLabelClass = "text-white font-bold";

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded max-w-md mx-auto">
            
            {/* Input the stall factor */}
            <label className="block">
                <span className={inputLabelClass}>Stall Factor</span>
                <input
                type="number"
                step="0.05"
                name="stallFactor"
                min={0}
                max={1}
                className={inputClass}
                value={form.stallFactor}
                onChange={handleChange}
                />
            </label>

            {/* Input the starting cash */}
            <label className="block">
                <span className={inputLabelClass}>Cash</span>
                <input
                type="number"
                name="cash"
                min={0}
                className={inputClass}
                value={form.cash}
                onChange={handleChange}
                />
            </label>

            {/* Input the starting eco */}
            <label className="block">
                <span className={inputLabelClass}>Eco</span>
                <input
                type="number"
                name="eco"
                min={0}
                className={inputClass}
                value={form.eco}
                onChange={handleChange}
                />
            </label>

            {/* Input the eco send to use */}
            <label className="block">
                <span className={inputLabelClass}>Eco Send</span>
                <select
                    id="eco-send"
                    name="ecoSend"
                    value={form.ecoSend}
                    onChange={handleChange}    
                    className={inputClass}
                >
                    {ecoSends.map((ecoSend) => {
                       return <option key={ecoSend} value={String(ecoSend)}>{String(ecoSend)}</option> 
                    })}

                </select>
            </label>

            {/* Input the starting round */}
            <label className="block">
                <span className={inputLabelClass}>Start Round</span>
                <input
                type="number"
                name="startRound"
                min={1}
                className={inputClass}
                value={form.startRound}
                onChange={handleChange}
                />
            </label>

            {/* Input the target round */}
            <label className="block">
                <span className={inputLabelClass}>Target Round</span>
                <input
                type="number"
                name="targetRound"
                min={1}
                className={inputClass}
                value={form.targetRound}
                onChange={handleChange}
                />
            </label>

            <button type="submit" className="bg-green-800 text-white py-2 px-4 rounded hover:bg-black">
                Simulate
            </button>
        </form>
    )
}