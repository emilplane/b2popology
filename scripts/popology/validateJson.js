/**
 * Validates JSON data using a JSON schema.
 * @param {object} schema - JSON schema as object
 * @param {object} data - JSON data as object
 * @returns 
 */
export default function validateJson(schema, data) {
    const ajv = new ajv7();
    const validate = ajv.compile(schema);
    const valid = validate(data);

    return {
        valid,
        errors: valid ? undefined : validate.errors
    };
}