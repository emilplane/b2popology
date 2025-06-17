import {
    Farm,
    SimOptions
} from "../../exports";

export default function FarmSubform({form, setForm}: any) {
    // We need form and setForm (from SimForm) because this component is intended to modify 
    // specifically the farm section of the form variable found in SimForm

    // For adding a farm to the sim input
    const addFarm = () => {
        setForm((prev: SimOptions) => ({
            ...prev,
            farms: [...form.farms, {round: 0, upgrades: [0,0,0]}]
        }));
    };

    // For removing a farm from the sim input
    const removeFarm = (index: number) => {
        setForm({
            ...form,
            farms: form.farms.filter((_: any,i: number) => i !== index)
        });
    };

    // For modifying an existing farm in the sim input
    const handleChange = (index: number, path: number, value: number) => {
        const updatedFarms = [...form.farms];
        updatedFarms[index].upgrades[path] = value;
        setForm({
            ...form,
            farms: updatedFarms
        });
    };
    
    // Display form options specific to farm input
    // For now, I'm just going to copy-paste suggested code from ChatGPT with basic revisions and then fix later
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Farm Configuration</h2>
            {form.farms.map((farm: Farm, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                <span>Farm {index + 1}:</span>
                <input
                    type="number"
                    min={0}
                    className="w-16 border rounded px-2 py-1"
                    value={farm.upgrades[0]}
                    onChange={(e) => handleChange(index, 0, Number(e.target.value))}
                />
                <input
                    type="number"
                    min={0}
                    className="w-16 border rounded px-2 py-1"
                    value={farm.upgrades[1]}
                    onChange={(e) => handleChange(index, 1, Number(e.target.value))}
                />
                <input
                    type="number"
                    min={0}
                    className="w-16 border rounded px-2 py-1"
                    value={farm.upgrades[2]}
                    onChange={(e) => handleChange(index, 2, Number(e.target.value))}
                />
                <button
                    onClick={() => removeFarm(index)}
                    type="button"
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Remove
                </button>
                </div>
            ))}
            <button
                onClick={addFarm}
                type="button"
                className="bg-blue-500 text-white px-3 py-1 rounded"
            >
                Add Farm
            </button>
        </div>
    );
}  