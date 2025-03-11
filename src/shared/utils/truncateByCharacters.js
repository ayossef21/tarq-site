export function truncateByCharacters(text, limit = 220) {
    if (text.length > limit) {
        return text.slice(0, limit) + "...";
    }
    return text;
}