import { 
    ecoSends,
    inputClass,
    inputLabelClass,
    SimOptions
} from "../../exports";

export default function BaseSubform({ form, setForm }: any) {
    // We need form (from SimForm) to display current options provided by the form within this subform
    // We need setForm (from SimForm) so the subform updates when we make changes to the input

    // For handling changes in form input
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name !== "ecoSend") {
            setForm((prev: SimOptions) => ({
                ...prev,
                [name]: Number(value),
            }));
        } else {
            setForm((prev: SimOptions) => ({
            ...prev,
            [name]: value,
            }));
        }
        

        // The start round must not exceed the target round
        // Programmer's note: Right now this doesn't work as expected
        if (form.startRound > form.targetRound) {
            setForm((prev: SimOptions) => ({
            ...prev,
            targetRound: form.startRound,
            }));
        };
    };

    return (
        <>
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
        </>
    )
}