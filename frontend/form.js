export function validateForm(name) {
    if (!name || name.length < 3) {
        return "Invalid";
    }
    return "Valid";
}