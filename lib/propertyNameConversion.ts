import {popologyConfig} from "@/config/popologyConfig";

export function propertyNameConversion(propertyName: string) {
    const propertyNameEntry = Object.entries(popologyConfig.propertyDisplayNames)
        .find(([key, value]) => key === propertyName);
    if (!propertyNameEntry) {
        return propertyName;
    } else {
        return propertyNameEntry[1];
    }
}