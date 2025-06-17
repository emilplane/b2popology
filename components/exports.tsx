// This file contains useful export values that other files need in order to operate smoothly

// Farms as they are needed to be input into the simulator
export interface Farm {
    round: number;
    upgrades: number[];
};

// Eco sends as they are needed to be input into the simulator
export interface EcoSend {
    round: number;
    sendName: string;
}

// Exhaustive interface for parameters for fine-tuning simulations
export interface SimOptions {
    stallFactor: number;
    cash: number;
    eco: number;
    startRound: number;
    targetRound: number;
    ecoSend: string;
    farms: Farm[];

    ecoQueue: EcoSend[];
    buyQueue: any[];
};

export const inputClass = "bg-white text-black mt-1 block w-full border border-black rounded p-2"; // Concerns how input boxes are stylized in SimForm
export const inputLabelClass = "text-white font-bold"; // Concerns how input labels are stylized in SimForm

// List of available eco sends that the simulator can use
export const ecoSends = [
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